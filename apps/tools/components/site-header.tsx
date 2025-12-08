import Link from "next/link";
import { Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import IntegratedNav from "./IntegratedNav";


export function SiteHeader() {
    return (
        <IntegratedNav
            currentApp="tools"
            appName="Tools"
            appIcon={
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-xl">
                    <Wrench className="h-5 w-5" />
                </div>
            }
            localLinks={[
                { href: "/", label: "All Tools" }
            ]}
        />
    );
}
