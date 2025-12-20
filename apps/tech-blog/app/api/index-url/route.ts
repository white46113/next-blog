import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';
import path from 'path';
import fs from 'fs';

const SCOPES = ['https://www.googleapis.com/auth/indexing'];

export async function POST(request: NextRequest) {
    try {
        const { url, type } = await request.json();

        if (!url) {
            return NextResponse.json(
                { error: 'URL is required' },
                { status: 400 }
            );
        }

        // Load service account credentials
        const keyFilePath = path.join(process.cwd(), '..', '..', 'cohesive-bonbon-480605-e3-b38f5ea5d171.json');

        if (!fs.existsSync(keyFilePath)) {
            return NextResponse.json(
                { error: 'Service account key file not found' },
                { status: 500 }
            );
        }

        const key = JSON.parse(fs.readFileSync(keyFilePath, 'utf8'));

        // Create JWT client
        const jwtClient = new google.auth.JWT({
            email: key.client_email,
            key: key.private_key,
            scopes: SCOPES,
        });

        // Authorize
        await jwtClient.authorize();

        // Create indexing API client
        const indexing = google.indexing({
            version: 'v3',
            auth: jwtClient,
        });

        // Submit URL for indexing
        const response = await indexing.urlNotifications.publish({
            requestBody: {
                url: url,
                type: type || 'URL_UPDATED',
            },
        });

        return NextResponse.json({
            success: true,
            message: 'URL submitted successfully',
            data: response.data,
        });
    } catch (error: any) {
        console.error('Indexing API error:', error);
        return NextResponse.json(
            {
                error: 'Failed to submit URL',
                details: error.message,
            },
            { status: 500 }
        );
    }
}

// Get indexing status
export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const url = searchParams.get('url');

        if (!url) {
            return NextResponse.json(
                { error: 'URL is required' },
                { status: 400 }
            );
        }

        // Load service account credentials
        const keyFilePath = path.join(process.cwd(), '..', '..', 'cohesive-bonbon-480605-e3-b38f5ea5d171.json');

        if (!fs.existsSync(keyFilePath)) {
            return NextResponse.json(
                { error: 'Service account key file not found' },
                { status: 500 }
            );
        }

        const key = JSON.parse(fs.readFileSync(keyFilePath, 'utf8'));

        // Create JWT client
        const jwtClient = new google.auth.JWT({
            email: key.client_email,
            key: key.private_key,
            scopes: SCOPES,
        });

        // Authorize
        await jwtClient.authorize();

        // Create indexing API client
        const indexing = google.indexing({
            version: 'v3',
            auth: jwtClient,
        });

        // Get URL status
        const response = await indexing.urlNotifications.getMetadata({
            url: url,
        });

        return NextResponse.json({
            success: true,
            data: response.data,
        });
    } catch (error: any) {
        console.error('Indexing API error:', error);
        return NextResponse.json(
            {
                error: 'Failed to get URL status',
                details: error.message,
            },
            { status: 500 }
        );
    }
}
