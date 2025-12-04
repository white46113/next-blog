import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Monitor, Settings, Zap, Shield, Wifi, Volume2, Battery, HelpCircle, Info, AlertTriangle, CheckCircle2, Clock, Cpu, Download, Lock, Lightbulb, Terminal, Folder, Globe } from "lucide-react";

export default function Windows11Guide() {
    const funFacts = [
        "The Secret Start Menu Sound: If your sound is working, mute and unmute your system while opening the Start menu. There's a subtle, satisfying sound few notice!",
        "Widgets Resurrection: Windows 11 brought back widgets, a feature last seen in Windows 7 (remember the weather and clock gadgets?).",
        "Android App Support: Windows 11 can run Android apps via the Amazon Appstore—a first for Windows desktop OS.",
        "File Explorer Redesign: The new File Explorer took inspiration from Microsoft's now-defunct \"Fluent Design\" language.",
        "Minimum Storage Mystery: Microsoft lists 64GB as minimum storage, but clean installs use less than 30GB—leaving room for updates!"
    ];

    const installationFixes = [
        {
            problem: "\"This PC Can't Run Windows 11\" Error",
            fixes: [
                {
                    title: "Fix 1: TPM & Secure Boot Enablement",
                    steps: [
                        "Restart and enter BIOS/UEFI (usually F2, F10, DEL, or ESC during boot)",
                        "Locate TPM settings (often under Security or Advanced)",
                        "Enable TPM 2.0 and Secure Boot",
                        "Save changes and restart"
                    ]
                },
                {
                    title: "Fix 2: Registry Bypass (For Non-Supported Hardware)",
                    warning: "This may violate Microsoft's terms and limit future updates",
                    steps: [
                        "Press Win + R, type regedit",
                        "Navigate to HKEY_LOCAL_MACHINE\\SYSTEM\\Setup\\MoSetup",
                        "Create new DWORD (32-bit) named AllowUpgradesWithUnsupportedTPMOrCPU",
                        "Set value to 1",
                        "Restart and attempt upgrade again"
                    ]
                }
            ]
        },
        {
            problem: "Stuck Installation or Endless Reboot Loop",
            fixes: [
                {
                    title: "Windows Installation Media Method",
                    steps: [
                        "Download Windows Media Creation Tool from Microsoft",
                        "Create installation USB on working computer",
                        "Boot from USB on problematic PC",
                        "Choose \"Repair your computer\" instead of install",
                        "Select \"Startup Repair\" or \"System Restore\""
                    ],
                    tip: "Disconnect all non-essential peripherals during installation—external drives, printers, and even RGB accessories can sometimes interfere."
                }
            ]
        }
    ];

    const performanceFixes = [
        {
            problem: "High RAM or CPU Usage After Upgrade",
            fixes: [
                {
                    title: "Fix 1: Disable Startup Bloat",
                    steps: [
                        "Press Ctrl + Shift + Esc to open Task Manager",
                        "Click \"Startup apps\" tab",
                        "Disable unnecessary programs (especially third-party utilities)",
                        "Restart"
                    ]
                },
                {
                    title: "Fix 2: Adjust Visual Effects",
                    steps: [
                        "Search \"Performance\" in Start menu",
                        "Select \"Adjust the appearance and performance of Windows\"",
                        "Choose \"Adjust for best performance\" or manually disable:",
                        "• Animations in the taskbar",
                        "• Transparency effects",
                        "• Menu fading"
                    ]
                },
                {
                    title: "Fix 3: Memory Integrity Check",
                    description: "Sometimes security features slow systems",
                    steps: [
                        "Search \"Core isolation\" in Start",
                        "Turn off \"Memory integrity\" if enabled",
                        "Restart"
                    ],
                    funFact: "Windows 11 uses a \"dynamic refresh rate\" that automatically adjusts based on your activity—saving battery when reading documents, increasing for gaming!"
                }
            ]
        }
    ];

    const startMenuFixes = [
        {
            problem: "Missing Right-Click Context Menu",
            description: "The simplified right-click menu frustrates power users.",
            fix: {
                title: "Restore Classic Context Menu",
                steps: [
                    "Open Registry Editor (Win + R, type regedit)",
                    "Navigate to HKEY_CURRENT_USER\\SOFTWARE\\CLASSES\\CLSID",
                    "Create key: {86ca1aa0-34aa-4e8b-a509-50c905bae2a2}",
                    "Inside, create another key named InprocServer32",
                    "Leave default value empty",
                    "Restart File Explorer via Task Manager or restart computer"
                ]
            }
        },
        {
            problem: "Taskbar Icons Missing or Unresponsive",
            fixes: [
                {
                    title: "Fix 1: Restart Windows Explorer",
                    steps: [
                        "Open Task Manager (Ctrl + Shift + Esc)",
                        "Find \"Windows Explorer\" under Processes",
                        "Right-click and select \"Restart\""
                    ]
                },
                {
                    title: "Fix 2: Taskbar Settings Reset",
                    steps: [
                        "Press Win + I for Settings",
                        "Navigate to Personalization > Taskbar",
                        "Toggle \"Lock the taskbar\" off and on",
                        "Toggle taskbar items off and on"
                    ],
                    hiddenGem: "Did you know you can still access the classic \"Never combine\" taskbar option? Use free utilities like \"StartAllBack\" or edit the registry for this familiar Windows 10 behavior."
                }
            ]
        }
    ];

    const networkFixes = [
        {
            problem: "Wi-Fi Drops or Slow Speeds",
            fixes: [
                {
                    title: "Fix 1: Network Stack Reset (Nuclear Option)",
                    steps: [
                        "Open Command Prompt as Administrator",
                        "Type these commands in order, pressing Enter after each:",
                        "netsh winsock reset",
                        "netsh int ip reset",
                        "ipconfig /release",
                        "ipconfig /renew",
                        "ipconfig /flushdns",
                        "Restart computer"
                    ]
                },
                {
                    title: "Fix 2: Disable IPv6 (Temporary Fix)",
                    steps: [
                        "Press Win + R, type ncpa.cpl",
                        "Right-click your active connection, select Properties",
                        "Uncheck \"Internet Protocol Version 6 (TCP/IPv6)\"",
                        "Click OK and test connection"
                    ],
                    funFact: "Windows 11 includes a hidden \"Network troubleshooter\" beyond the basic one! Search \"Settings > Troubleshoot > Other troubleshooters\" for advanced diagnostics."
                }
            ]
        }
    ];

    const audioFixes = [
        {
            problem: "No Sound or Distorted Audio",
            fixes: [
                {
                    title: "Fix 1: Audio Driver Reinstallation",
                    steps: [
                        "Right-click Start, select \"Device Manager\"",
                        "Expand \"Sound, video and game controllers\"",
                        "Right-click your audio device, select \"Uninstall device\"",
                        "Check \"Attempt to remove the driver for this device\"",
                        "Restart—Windows will reinstall driver automatically"
                    ]
                },
                {
                    title: "Fix 2: Disable Audio Enhancements",
                    steps: [
                        "Right-click speaker icon in taskbar",
                        "Select \"Sounds\" > Playback tab",
                        "Double-click your default device",
                        "Navigate to Enhancements tab",
                        "Check \"Disable all enhancements\"",
                        "Apply and test"
                    ],
                    proTip: "Windows 11 includes a hidden \"Audio Display\" feature that visualizes sound output by app—perfect for identifying which program is causing issues!"
                }
            ]
        }
    ];

    const batteryFixes = [
        {
            problem: "Poor Battery Life After Update",
            fixes: [
                {
                    title: "Fix 1: Battery Report Analysis",
                    steps: [
                        "Open Command Prompt as Admin",
                        "Type: powercfg /batteryreport",
                        "Navigate to the saved HTML file (usually C:\\Windows\\system32\\battery-report.html)",
                        "Check \"Battery life estimates\" section",
                        "Identify apps with high usage under \"Usage history\""
                    ]
                },
                {
                    title: "Fix 2: Power Plan Tweaks",
                    steps: [
                        "Search \"Edit power plan\"",
                        "Select \"Change advanced power settings\"",
                        "Adjust:",
                        "• Processor power management: Set maximum processor state to 99% on battery",
                        "• Wireless Adapter Settings: Set to \"Maximum Power Saving\"",
                        "• Display: Reduce brightness and turn-off times"
                    ]
                },
                {
                    title: "Fix 3: Modern Standby Issues",
                    description: "If your laptop drains battery while \"sleeping\"",
                    steps: [
                        "Open Command Prompt as Admin",
                        "Type: powercfg /a to check sleep states available",
                        "If only \"Modern Standby\" appears, consider disabling via registry (advanced users only)"
                    ]
                }
            ]
        }
    ];

    const proTips = [
        { shortcut: "Win + Ctrl + Shift + B", action: "Reset graphics driver (black screen fix)" },
        { shortcut: "Win + . or Win + ;", action: "Emoji & symbol keyboard" },
        { shortcut: "Win + Alt + R", action: "Record screen (Xbox Game Bar)" },
        { shortcut: "Win + H", action: "Voice typing (remarkably accurate!)" },
        { shortcut: "Win + Shift + S", action: "Enhanced snipping tool" }
    ];

    const fileExplorerTips = [
        "Tabs: Finally! Press Ctrl + T for new tab in File Explorer",
        "Gallery View: New photo-focused view in navigation pane",
        "Better context menus: Shift+right-click for \"Copy as path\" and other admin options"
    ];

    const performanceTweaks = [
        "Hardware-accelerated GPU scheduling: Settings > System > Display > Graphics > Change default graphics settings",
        "Storage Sense automation: Set to auto-clean temporary files weekly",
        "Delivery Optimization limit: Settings > Windows Update > Advanced options > Delivery Optimization > Advanced options > set monthly upload limit"
    ];

    const easterEggs = [
        "Secret Screen Saver: Right-click desktop > Personalize > Lock screen > Screen saver > 3D Text",
        "Paint 3D: Still included! Search for it—surprisingly capable",
        "Clipboard History: Win + V enables multi-item clipboard",
        "Focus Sessions: Clock app integrates with Spotify for productivity"
    ];

    const faqs = [
        { q: "Can I still upgrade to Windows 11 for free?", a: "Yes! If you have a genuine Windows 10 license, Windows 11 remains free through Windows Update or Media Creation Tool." },
        { q: "Will Windows 11 slow down my older PC?", a: "Not necessarily. While requirements are stricter, optimized Windows 11 can perform similarly to Windows 10 on supported hardware." },
        { q: "How do I move the taskbar to the top or sides?", a: "Natively, Windows 11 only supports bottom alignment. Third-party tools like \"ExplorerPatcher\" can restore this functionality." },
        { q: "Is it safe to disable TPM after installation?", a: "No! Windows 11 may fail to boot or receive updates. Keep TPM enabled for security and stability." },
        { q: "Why can't I drag files to the taskbar?", a: "Microsoft removed this feature initially but reinstated it in 2022 updates. Ensure you're updated to build 22621 or later." },
        { q: "How do I bypass Microsoft account requirement?", a: "During setup, disconnect internet. When asked for account, enter \"no@thankyou.com\" with any password—the error will offer local account option." },
        { q: "What happened to Cortana?", a: "Cortana was deprecated from initial Windows 11 setup but remains available in Store for those who want it." },
        { q: "Can I get the old Windows 10-style Start menu back?", a: "Yes! Apps like \"Start11\" or \"Open-Shell\" can customize Start to resemble Windows 10 or even Windows 7." },
        { q: "Why are my files taking longer to copy?", a: "Windows 11 uses different file transfer algorithms. Try disabling \"Remote Differential Compression\" in Windows Features." },
        { q: "How do I enable God Mode?", a: "Create new folder, rename to: GodMode.{ED7BA470-8E54-465E-825C-99712043E01C}" },
        { q: "Is Windows 11 better for gaming?", a: "Yes, with Auto HDR, DirectStorage, and better Game Mode. Performance gains vary by hardware and game." },
        { q: "Why does right-click show \"Show more options\"?", a: "Microsoft simplified the context menu. Press Shift+F10 for classic menu or use registry fix earlier in guide." },
        { q: "How do I uninstall Windows 11?", a: "Within 10 days of upgrade: Settings > System > Recovery > Go back. After: Clean install Windows 10." },
        { q: "What's Widgets button and can I remove it?", a: "Widgets show news, weather, etc. Right-click taskbar > Taskbar settings > toggle Widgets off." },
        { q: "Why is my SSD health declining faster?", a: "Windows 11 uses more frequent TRIM operations. Check with manufacturer tools—likely normal wear." },
        { q: "Can I run Windows 11 on Mac?", a: "Yes, via Boot Camp on Intel Macs or Parallels/VirtualBox on M1/M2 with Windows 11 ARM version." },
        { q: "How to disable Snap Layouts?", a: "Settings > System > Multitasking > disable \"Snap windows\" options." },
        { q: "What happened to Timeline?", a: "Removed in Windows 11. Use Alt+Tab or virtual desktops (Win+Tab) for task switching." },
        { q: "Why is Search slow?", a: "Rebuild index: Settings > Privacy & security > Searching Windows > Advanced indexing options > Rebuild." },
        { q: "How to reduce Windows 11 install size?", a: "Use Disk Cleanup (cleanmgr), select \"Clean up system files,\" check everything, especially \"Windows Update Cleanup.\"" },
        { q: "Can I force dark mode on all apps?", a: "Partial support only. Settings > Personalization > Colors > Choose mode. Some apps ignore this setting." },
        { q: "Why does Windows 11 look different on my friend's PC?", a: "Microsoft A/B tests features. Your experience may differ based on region, hardware, or account." },
        { q: "How to disable \"Recommended\" in Start?", a: "Settings > Personalization > Start > toggle off \"Show recommendations.\"" },
        { q: "Is Windows 12 coming soon?", a: "Rumored for 2024, but Microsoft hasn't officially announced. Windows 11 will receive support until 2031." },
        { q: "Best way to backup before troubleshooting?", a: "Create system image: Control Panel > Backup and Restore (Windows 7) > Create system image." }
    ];

    return (
        <div className="space-y-12">
            {/* Header */}
            <div className="space-y-4">
                <Badge className="bg-blue-600 hover:bg-blue-700">Windows 11 Guide</Badge>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                    The Ultimate Guide to Windows 11: Common Problems, Clever Fixes & Insider Secrets
                </h1>
                <p className="text-xl text-muted-foreground">
                    Windows 11 arrived with a fresh interface, centered Start menus, and rounded corners that divided opinion but undeniably moved Microsoft's flagship OS forward. This comprehensive guide isn't just another troubleshooting list—it's your friendly companion through the maze of Windows 11 quirks.
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1"><Clock className="h-4 w-4" /> 12 min read</div>
                    <div className="flex items-center gap-1"><Monitor className="h-4 w-4" /> Updated Feb 5, 2025</div>
                </div>
            </div>

            {/* Introduction */}
            <Card>
                <CardContent className="pt-6">
                    <p className="text-muted-foreground leading-relaxed">
                        Whether you're a recent upgrader or a day-one adopter, you've likely encountered some frustrating glitches. We'll explore common problems with practical fixes, sprinkle in fascinating trivia, and reveal hidden features that make Windows 11 more enjoyable. By the end, you'll not only solve issues but appreciate the architecture behind them.
                    </p>
                    <Alert className="mt-4 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-900">
                        <Info className="h-4 w-4 text-blue-600" />
                        <AlertDescription className="text-blue-700 dark:text-blue-400">
                            <strong>Did you know?</strong> Windows 11 initially required TPM 2.0 and Secure Boot, causing upgrade headaches for millions. Microsoft eventually relaxed these requirements after significant user feedback!
                        </AlertDescription>
                    </Alert>
                </CardContent>
            </Card>

            {/* Fun Facts */}
            <div className="space-y-6">
                <h2 className="text-3xl font-bold">Fun Facts & Windows 11 Trivia</h2>
                <Card className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Lightbulb className="h-6 w-6 text-yellow-600" />
                            Before we dive into problem-solving, let's lighten the mood
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        {funFacts.map((fact, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                                <CheckCircle2 className="h-5 w-5 mt-0.5 text-green-500 shrink-0" />
                                <p className="text-sm">{fact}</p>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>

            {/* Installation & Upgrade Issues */}
            <div className="space-y-6">
                <h2 className="text-3xl font-bold flex items-center gap-2">
                    <Download className="h-8 w-8 text-primary" />
                    Installation & Upgrade Issues
                </h2>
                {installationFixes.map((issue, idx) => (
                    <Card key={idx}>
                        <CardHeader>
                            <CardTitle className="text-red-600 dark:text-red-400">Problem: {issue.problem}</CardTitle>
                            <CardDescription>Even capable PCs sometimes fail Microsoft's strict requirements.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {issue.fixes.map((fix, fIdx) => (
                                <div key={fIdx} className="space-y-3">
                                    <h3 className="font-semibold text-lg">{fix.title}</h3>
                                    {'warning' in fix && fix.warning && (
                                        <Alert className="bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200">
                                            <AlertTriangle className="h-4 w-4 text-yellow-600" />
                                            <AlertDescription className="text-yellow-700 dark:text-yellow-400">
                                                {fix.warning}
                                            </AlertDescription>
                                        </Alert>
                                    )}
                                    <ul className="space-y-2 ml-4">
                                        {fix.steps.map((step, sIdx) => (
                                            <li key={sIdx} className="flex items-start gap-2 text-sm">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                                {step}
                                            </li>
                                        ))}
                                    </ul>
                                    {'tip' in fix && fix.tip && (
                                        <Alert className="bg-green-50 dark:bg-green-900/20 border-green-200">
                                            <Info className="h-4 w-4 text-green-600" />
                                            <AlertTitle className="text-green-800 dark:text-green-300">Pro Tip</AlertTitle>
                                            <AlertDescription className="text-green-700 dark:text-green-400">
                                                {fix.tip}
                                            </AlertDescription>
                                        </Alert>
                                    )}
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Performance & Speed Problems */}
            <div className="space-y-6">
                <h2 className="text-3xl font-bold flex items-center gap-2">
                    <Zap className="h-8 w-8 text-primary" />
                    Performance & Speed Problems
                </h2>
                {performanceFixes.map((issue, idx) => (
                    <Card key={idx}>
                        <CardHeader>
                            <CardTitle className="text-red-600 dark:text-red-400">Problem: {issue.problem}</CardTitle>
                            <CardDescription>Windows 11's new features sometimes consume unexpected resources.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {issue.fixes.map((fix, fIdx) => (
                                <div key={fIdx} className="space-y-3">
                                    <h3 className="font-semibold text-lg">{fix.title}</h3>
                                    {'description' in fix && fix.description && (
                                        <p className="text-sm text-muted-foreground">{fix.description}</p>
                                    )}
                                    <ul className="space-y-2 ml-4">
                                        {fix.steps.map((step, sIdx) => (
                                            <li key={sIdx} className="flex items-start gap-2 text-sm">
                                                <CheckCircle2 className="h-4 w-4 mt-0.5 text-green-500 shrink-0" />
                                                {step}
                                            </li>
                                        ))}
                                    </ul>
                                    {'funFact' in fix && fix.funFact && (
                                        <Alert className="bg-blue-50 dark:bg-blue-900/20 border-blue-200">
                                            <Lightbulb className="h-4 w-4 text-blue-600" />
                                            <AlertTitle className="text-blue-800 dark:text-blue-300">Fun Fact</AlertTitle>
                                            <AlertDescription className="text-blue-700 dark:text-blue-400">
                                                {fix.funFact}
                                            </AlertDescription>
                                        </Alert>
                                    )}
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Start Menu & Taskbar */}
            <div className="space-y-6">
                <h2 className="text-3xl font-bold flex items-center gap-2">
                    <Settings className="h-8 w-8 text-primary" />
                    Start Menu & Taskbar Troubles
                </h2>
                {startMenuFixes.map((issue, idx) => (
                    <Card key={idx}>
                        <CardHeader>
                            <CardTitle className="text-red-600 dark:text-red-400">Problem: {issue.problem}</CardTitle>
                            {issue.description && <CardDescription>{issue.description}</CardDescription>}
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {issue.fix ? (
                                <div className="space-y-3">
                                    <h3 className="font-semibold text-lg">{issue.fix.title}</h3>
                                    <ul className="space-y-2 ml-4">
                                        {issue.fix.steps.map((step, sIdx) => (
                                            <li key={sIdx} className="flex items-start gap-2 text-sm">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                                {step}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ) : (
                                issue.fixes?.map((fix, fIdx) => (
                                    <div key={fIdx} className="space-y-3">
                                        <h3 className="font-semibold text-lg">{fix.title}</h3>
                                        <ul className="space-y-2 ml-4">
                                            {fix.steps.map((step, sIdx) => (
                                                <li key={sIdx} className="flex items-start gap-2 text-sm">
                                                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-green-500 shrink-0" />
                                                    {step}
                                                </li>
                                            ))}
                                        </ul>
                                        {'hiddenGem' in fix && fix.hiddenGem && (
                                            <Alert className="bg-purple-50 dark:bg-purple-900/20 border-purple-200">
                                                <Info className="h-4 w-4 text-purple-600" />
                                                <AlertTitle className="text-purple-800 dark:text-purple-300">Hidden Gem</AlertTitle>
                                                <AlertDescription className="text-purple-700 dark:text-purple-400">
                                                    {fix.hiddenGem}
                                                </AlertDescription>
                                            </Alert>
                                        )}
                                    </div>
                                ))
                            )}
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Microsoft Store & App Issues */}
            <div className="space-y-6">
                <h2 className="text-3xl font-bold flex items-center gap-2">
                    <Globe className="h-8 w-8 text-primary" />
                    Microsoft Store & App Issues
                </h2>
                <Card>
                    <CardHeader>
                        <CardTitle className="text-red-600 dark:text-red-400">Problem: Apps Won't Install or Update</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-3">
                            <h3 className="font-semibold text-lg">Fix 1: Store Cache Reset</h3>
                            <ul className="space-y-2 ml-4">
                                <li className="flex items-start gap-2 text-sm">
                                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-green-500 shrink-0" />
                                    Press Win + R, type wsreset.exe
                                </li>
                                <li className="flex items-start gap-2 text-sm">
                                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-green-500 shrink-0" />
                                    Wait for black window to close (may take minutes)
                                </li>
                                <li className="flex items-start gap-2 text-sm">
                                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-green-500 shrink-0" />
                                    Restart Store app
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <h3 className="font-semibold text-lg">Fix 2: Re-register Store App via PowerShell</h3>
                            <ul className="space-y-2 ml-4">
                                <li className="flex items-start gap-2 text-sm">
                                    <Terminal className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                                    Right-click Start, select "Windows Terminal (Admin)"
                                </li>
                                <li className="flex items-start gap-2 text-sm">
                                    <Terminal className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                                    Type: Get-AppXPackage *WindowsStore* -AllUsers | Foreach {"{Add-AppxPackage -DisableDevelopmentMode -Register \"$($_.InstallLocation)\\AppXManifest.xml\"}"}
                                </li>
                                <li className="flex items-start gap-2 text-sm">
                                    <Terminal className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                                    Press Enter and wait for process to complete
                                </li>
                            </ul>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-red-600 dark:text-red-400">Problem: Android Apps Not Working</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <h3 className="font-semibold text-lg mb-3">Fix: Enable Virtualization & Install Subsystem</h3>
                        <ul className="space-y-2 ml-4">
                            {[
                                "Ensure virtualization is enabled in BIOS/UEFI",
                                "Open Microsoft Store, search \"Windows Subsystem for Android\"",
                                "Install latest version",
                                "Open \"Windows Subsystem for Android\" from Start menu",
                                "Enable \"Developer mode\" if needed",
                                "Install Amazon Appstore from Microsoft Store"
                            ].map((step, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm">
                                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-green-500 shrink-0" />
                                    {step}
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            </div>

            {/* Connectivity & Network */}
            <div className="space-y-6">
                <h2 className="text-3xl font-bold flex items-center gap-2">
                    <Wifi className="h-8 w-8 text-primary" />
                    Connectivity & Network Problems
                </h2>
                {networkFixes.map((issue, idx) => (
                    <Card key={idx}>
                        <CardHeader>
                            <CardTitle className="text-red-600 dark:text-red-400">Problem: {issue.problem}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {issue.fixes.map((fix, fIdx) => (
                                <div key={fIdx} className="space-y-3">
                                    <h3 className="font-semibold text-lg">{fix.title}</h3>
                                    <ul className="space-y-2 ml-4">
                                        {fix.steps.map((step, sIdx) => (
                                            <li key={sIdx} className="flex items-start gap-2 text-sm">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                                {step}
                                            </li>
                                        ))}
                                    </ul>
                                    {'funFact' in fix && fix.funFact && (
                                        <Alert className="bg-blue-50 dark:bg-blue-900/20 border-blue-200">
                                            <Info className="h-4 w-4 text-blue-600" />
                                            <AlertDescription className="text-blue-700 dark:text-blue-400">
                                                <strong>Fun Fact:</strong> {fix.funFact}
                                            </AlertDescription>
                                        </Alert>
                                    )}
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Audio & Sound */}
            <div className="space-y-6">
                <h2 className="text-3xl font-bold flex items-center gap-2">
                    <Volume2 className="h-8 w-8 text-primary" />
                    Audio & Sound Glitches
                </h2>
                {audioFixes.map((issue, idx) => (
                    <Card key={idx}>
                        <CardHeader>
                            <CardTitle className="text-red-600 dark:text-red-400">Problem: {issue.problem}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {issue.fixes.map((fix, fIdx) => (
                                <div key={fIdx} className="space-y-3">
                                    <h3 className="font-semibold text-lg">{fix.title}</h3>
                                    <ul className="space-y-2 ml-4">
                                        {fix.steps.map((step, sIdx) => (
                                            <li key={sIdx} className="flex items-start gap-2 text-sm">
                                                <CheckCircle2 className="h-4 w-4 mt-0.5 text-green-500 shrink-0" />
                                                {step}
                                            </li>
                                        ))}
                                    </ul>
                                    {'proTip' in fix && fix.proTip && (
                                        <Alert className="bg-green-50 dark:bg-green-900/20 border-green-200">
                                            <Info className="h-4 w-4 text-green-600" />
                                            <AlertTitle className="text-green-800 dark:text-green-300">Pro Audio Tip</AlertTitle>
                                            <AlertDescription className="text-green-700 dark:text-green-400">
                                                {fix.proTip}
                                            </AlertDescription>
                                        </Alert>
                                    )}
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Privacy & Security */}
            <div className="space-y-6">
                <h2 className="text-3xl font-bold flex items-center gap-2">
                    <Shield className="h-8 w-8 text-primary" />
                    Privacy & Security Concerns
                </h2>
                <Card>
                    <CardHeader>
                        <CardTitle className="text-red-600 dark:text-red-400">Problem: Excessive Telemetry and Data Collection</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        <h3 className="font-semibold text-lg">Fix: Privacy Dashboard Configuration</h3>
                        <ul className="space-y-2 ml-4">
                            <li className="flex items-start gap-2 text-sm">
                                <Lock className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                                Press Win + I, go to Privacy & security
                            </li>
                            <li className="flex items-start gap-2 text-sm">
                                <Lock className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                                Review each section:
                                <ul className="ml-4 mt-1 space-y-1">
                                    <li>• General: Disable all toggle switches</li>
                                    <li>• Diagnostics & feedback: Choose "Required diagnostic data"</li>
                                    <li>• Activity history: Clear and disable "Store my activity history"</li>
                                </ul>
                            </li>
                            <li className="flex items-start gap-2 text-sm">
                                <Lock className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                                Use open-source tools like "O&O ShutUp11++" for advanced controls
                            </li>
                        </ul>
                        <Alert className="mt-4 bg-blue-50 dark:bg-blue-900/20 border-blue-200">
                            <Info className="h-4 w-4 text-blue-600" />
                            <AlertTitle className="text-blue-800 dark:text-blue-300">Security Trivia</AlertTitle>
                            <AlertDescription className="text-blue-700 dark:text-blue-400">
                                Windows 11's Smart App Control uses AI to block unrecognized apps—a significant improvement over traditional signature-based detection!
                            </AlertDescription>
                        </Alert>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-red-600 dark:text-red-400">Problem: Windows Defender False Positives</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <h3 className="font-semibold text-lg mb-3">Fix: Add Exclusions</h3>
                        <ul className="space-y-2 ml-4">
                            {[
                                "Search \"Virus & threat protection\"",
                                "Select \"Manage settings\"",
                                "Scroll to \"Exclusions\" and add folders or files",
                                "For developers, exclude entire project directories"
                            ].map((step, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm">
                                    <Shield className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                                    {step}
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            </div>

            {/* Battery & Power Management */}
            <div className="space-y-6">
                <h2 className="text-3xl font-bold flex items-center gap-2">
                    <Battery className="h-8 w-8 text-primary" />
                    Battery & Power Management
                </h2>
                {batteryFixes.map((issue, idx) => (
                    <Card key={idx}>
                        <CardHeader>
                            <CardTitle className="text-red-600 dark:text-red-400">Problem: {issue.problem}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {issue.fixes.map((fix, fIdx) => (
                                <div key={fIdx} className="space-y-3">
                                    <h3 className="font-semibold text-lg">{fix.title}</h3>
                                    {'description' in fix && fix.description && (
                                        <p className="text-sm text-muted-foreground italic">{fix.description}</p>
                                    )}
                                    <ul className="space-y-2 ml-4">
                                        {fix.steps.map((step, sIdx) => (
                                            <li key={sIdx} className="flex items-start gap-2 text-sm">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                                {step}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Pro Tips & Hidden Features */}
            <div className="space-y-6">
                <h2 className="text-3xl font-bold">Pro Tips & Hidden Features</h2>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Cpu className="h-6 w-6 text-primary" />
                            Secret Shortcuts Every User Should Know
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-3 sm:grid-cols-2">
                            {proTips.map((tip, idx) => (
                                <div key={idx} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                                    <code className="text-sm font-mono bg-background px-2 py-1 rounded">
                                        {tip.shortcut}
                                    </code>
                                    <span className="text-sm text-muted-foreground ml-2">{tip.action}</span>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Folder className="h-6 w-6 text-primary" />
                            File Explorer Power Moves
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2">
                            {fileExplorerTips.map((tip, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm">
                                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-green-500 shrink-0" />
                                    {tip}
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Zap className="h-6 w-6 text-primary" />
                            Performance Tweaks Most Miss
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2">
                            {performanceTweaks.map((tweak, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                    {tweak}
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Lightbulb className="h-6 w-6 text-yellow-600" />
                            Easter Eggs & Fun Features
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2">
                            {easterEggs.map((egg, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm">
                                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-green-500 shrink-0" />
                                    {egg}
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            </div>

            {/* Important Warning */}
            <Alert className="bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-900">
                <AlertTriangle className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
                <AlertTitle className="text-yellow-800 dark:text-yellow-300">Important Warning</AlertTitle>
                <AlertDescription className="text-yellow-700 dark:text-yellow-400">
                    Always create a system restore point before making registry changes or major system modifications. Backup your important data regularly!
                </AlertDescription>
            </Alert>

            {/* FAQ */}
            <div className="space-y-6">
                <h2 className="text-3xl font-bold">FAQ: Your Top 25 Questions Answered</h2>
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, idx) => (
                        <AccordionItem key={idx} value={`item-${idx}`}>
                            <AccordionTrigger className="text-left font-medium">
                                Q{idx + 1}: {faq.q}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">
                                <strong>A:</strong> {faq.a}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>

            {/* Conclusion */}
            <Alert className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-900">
                <Info className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                <AlertTitle className="text-blue-800 dark:text-blue-300">Conclusion: A Smoother Windows 11 Experience</AlertTitle>
                <AlertDescription className="text-blue-700 dark:text-blue-400 space-y-2">
                    <p>
                        Windows 11 represents Microsoft's vision for the next decade of computing—centered on security, productivity, and modern aesthetics. While the transition brings inevitable hiccups, most issues have straightforward solutions once you know where to look.
                    </p>
                    <p>
                        Remember that Windows 11 is continuously evolving. The problematic feature today might be fixed in next month's Patch Tuesday. Stay updated, maintain regular backups, and don't hesitate to use system restore points before major changes.
                    </p>
                    <p className="font-semibold">
                        Final Pro Tip: Create a dedicated troubleshooting USB drive with Windows 11 installation media, your essential drivers, and recovery tools. This "digital first-aid kit" has saved countless users from frustration.
                    </p>
                    <p>
                        Whether you're wrestling with stubborn drivers or just want to personalize your Start menu, approach Windows 11 with curiosity. Behind every frustration is an opportunity to better understand your digital companion. Happy computing!
                    </p>
                </AlertDescription>
            </Alert>
        </div>
    );
}
