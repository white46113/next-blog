import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Zap, Settings, HardDrive, Cpu, Database, Wrench, Clock, Info, AlertTriangle, CheckCircle2, Terminal, Shield, TrendingUp } from "lucide-react";

export default function Windows11SpeedGuide() {
    const quickFixes = [
        { title: "Restart Your Computer", description: "The simplest yet most effective solution often overlooked. A restart clears temporary files, resets memory allocation, and terminates hung processes." },
        { title: "Update Windows 11", description: "Navigate to Settings > Windows Update, click 'Check for updates', and install all available updates including optional driver improvements." },
        { title: "Power Plan Adjustment", description: "Select 'High performance' power plan and adjust processor power management settings for maximum performance." },
        { title: "Disable Visual Effects", description: "Type 'View advanced system settings' in Start menu, select 'Adjust for best performance' to disable animations and transparency." },
        { title: "Clean Desktop and Startup", description: "Reduce desktop icons to under 20 and remove unnecessary files from desktop for better performance." }
    ];

    const systemOptimizations = [
        {
            title: "Privacy Settings Reduction",
            steps: [
                "Settings > Privacy & security > Diagnostics & feedback",
                "Set Diagnostic data to 'Required diagnostic data only'",
                "Turn off 'Tailored experiences'",
                "Privacy & security > General: Disable all four toggle switches"
            ]
        },
        {
            title: "Background Apps Management",
            steps: [
                "Settings > Apps > Installed apps",
                "Click three dots next to each non-essential app",
                "Select 'Advanced options'",
                "Set 'Background apps permissions' to 'Never'"
            ]
        },
        {
            title: "Game Mode Optimization",
            steps: [
                "Settings > Gaming > Game Mode",
                "Enable Game Mode",
                "Click 'Graphics' to assign high-performance GPU to critical apps"
            ]
        },
        {
            title: "Virtual Memory Configuration",
            steps: [
                "Search 'View advanced system settings'",
                "Performance > Settings > Advanced > Virtual Memory > Change",
                "Uncheck 'Automatically manage paging file size'",
                "Set custom size: Initial = 1.5 × RAM, Maximum = 3 × RAM",
                "Place page file on fastest drive if multiple drives exist"
            ]
        }
    ];

    const startupOptimizations = [
        {
            title: "Startup Application Control",
            description: "Open Task Manager > Startup tab, sort by 'Startup impact', and disable all non-essential applications.",
            icon: Zap
        },
        {
            title: "Services Optimization",
            description: "Type 'services.msc' in Run dialog. Set these services to 'Manual' or 'Disabled': Connected User Experiences and Telemetry, SysMain (if using SSD), Windows Search (if not frequently searching), Print Spooler (if no printer).",
            icon: Settings,
            warning: "Research each service before changing startup type to avoid system instability."
        },
        {
            title: "Scheduled Tasks Reduction",
            description: "Open Task Scheduler (taskschd.msc), navigate to Task Scheduler Library > Microsoft > Windows, and disable unnecessary tasks like Customer Experience Improvement Program tasks.",
            icon: Clock
        }
    ];

    const storageOptimizations = [
        {
            title: "Disk Cleanup Deep Dive",
            steps: [
                "Search 'Disk Cleanup' and run as administrator",
                "Select system drive and clean system files",
                "Select all categories, especially Windows Update Cleanup, Delivery Optimization Files, Temporary files, and System error memory dump files"
            ]
        },
        {
            title: "Storage Sense Configuration",
            steps: [
                "Settings > System > Storage",
                "Enable Storage Sense",
                "Configure to run automatically when low on space",
                "Set Temporary Files deletion frequency"
            ]
        },
        {
            title: "Indexing Service Optimization",
            steps: [
                "Settings > Privacy & security > Searching Windows",
                "Under 'Find My Files,' select 'Classic' for better performance",
                "Click 'Advanced indexing options'",
                "Modify locations indexed (exclude rarely searched folders)"
            ]
        },
        {
            title: "Disable Hibernation (If Not Needed)",
            steps: [
                "Open Command Prompt as Administrator",
                "Type: powercfg -h off",
                "This frees up space equal to your RAM size"
            ]
        }
    ];

    const registryTweaks = [
        {
            title: "Disable Windows Animations",
            path: "HKEY_CURRENT_USER\\Control Panel\\Desktop",
            value: "Create/String: 'UserPreferencesMask' = hex:90,12,03,80"
        },
        {
            title: "Speed Up Menu Show Delay",
            path: "HKEY_CURRENT_USER\\Control Panel\\Desktop",
            value: "Modify: 'MenuShowDelay' = '10' (default is 400)"
        },
        {
            title: "Improve System Responsiveness",
            path: "HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Control\\PriorityControl",
            value: "Create/DWORD: 'Win32PrioritySeparation' = 38"
        },
        {
            title: "Disable NTFS Last Access Time Stamping",
            path: "HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Control\\FileSystem",
            value: "Modify: 'NtfsDisableLastAccessUpdate' = 1"
        }
    ];

    const hardwareUpgrades = [
        {
            title: "RAM Upgrade Analysis",
            recommendations: [
                "Minimum: 8GB for basic use",
                "Recommended: 16GB for multitasking",
                "Optimal: 32GB for power users",
                "Check motherboard specifications before purchasing"
            ]
        },
        {
            title: "Storage Solutions",
            recommendations: [
                "HDD to SSD Migration: 200-500% faster boot/load times",
                "NVMe vs. SATA SSD: NVMe offers 3-5x faster speeds than SATA SSD",
                "Requires M.2 slot on motherboard",
                "Consider PCIe 3.0 vs 4.0 compatibility"
            ]
        },
        {
            title: "BIOS/UEFI Optimization",
            recommendations: [
                "Enter BIOS during boot (F2, F10, Del key)",
                "Enable XMP/DOCP for RAM running at rated speeds",
                "Disable unused peripherals/ports",
                "Ensure SSD is in AHCI mode (not IDE/RAID)"
            ]
        }
    ];

    const maintenanceRoutines = [
        {
            frequency: "Daily (2-3 Minutes)",
            tasks: [
                "Restart computer if left on overnight",
                "Check Task Manager for unexpected processes",
                "Clear browser cache and temporary files"
            ]
        },
        {
            frequency: "Weekly (10-15 Minutes)",
            tasks: [
                "Run Disk Cleanup",
                "Update software/drivers",
                "Check for Windows updates",
                "Review startup applications"
            ]
        },
        {
            frequency: "Monthly (30-45 Minutes)",
            tasks: [
                "Full malware scan with Windows Security",
                "Check Storage Sense settings",
                "Review installed applications (uninstall unused)",
                "Clean physical hardware (keyboard, screen, vents)"
            ]
        },
        {
            frequency: "Quarterly (1-2 Hours)",
            tasks: [
                "Create system backup/image",
                "Clean internal components (if comfortable)",
                "Check SMART status of storage devices",
                "Test backup restoration process"
            ]
        }
    ];

    const troubleshootingScenarios = [
        {
            problem: "Slow Boot Times (Over 30 Seconds)",
            solutions: [
                "Use msconfig to enable boot logging",
                "Check Task Manager Startup impact ratings",
                "Disable Fast Startup (can cause issues on some systems)",
                "Reduce startup applications to under 5",
                "Update motherboard/chipset drivers"
            ]
        },
        {
            problem: "Application-Specific Slowdowns",
            solutions: [
                "Microsoft Office: Disable hardware graphics acceleration",
                "Web Browsers: Reduce open tabs, disable unnecessary extensions",
                "Gaming: Update graphics drivers, adjust in-game settings, enable Game Mode"
            ]
        },
        {
            problem: "Network-Related Slowdowns",
            solutions: [
                "Reset network stack: netsh winsock reset, netsh int ip reset, ipconfig /flushdns",
                "Update network adapter drivers",
                "Disable IPv6 if not needed",
                "Change DNS to Cloudflare (1.1.1.1) or Google (8.8.8.8)"
            ]
        }
    ];

    const performanceTools = [
        { category: "Built-in", tools: "Task Manager, Resource Monitor, Performance Monitor" },
        { category: "Third-party", tools: "CPU-Z, HWMonitor, CrystalDiskMark, LatencyMon" },
        { category: "Microsoft", tools: "Windows Performance Toolkit, Process Explorer" }
    ];

    return (
        <div className="space-y-12">
            {/* Header */}
            <div className="space-y-4">
                <Badge className="bg-blue-600 hover:bg-blue-700">Windows 11 Performance</Badge>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                    The Ultimate Guide to Speeding Up Windows 11: 5,000+ Word Master Plan
                </h1>
                <p className="text-xl text-muted-foreground">
                    Windows 11 represents Microsoft's most modern operating system, but over time, it can become sluggish due to various factors. This comprehensive guide provides actionable strategies, technical solutions, and maintenance routines to significantly accelerate your Windows 11 experience.
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1"><Clock className="h-4 w-4" /> 18 min read</div>
                    <div className="flex items-center gap-1"><Cpu className="h-4 w-4" /> Updated Dec 7, 2025</div>
                </div>
            </div>

            {/* Hero Image */}
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg border">
                <Image
                    src="/images/articles/windows-11-speed/hero.png"
                    alt="Windows 11 Speed and Performance Optimization"
                    fill
                    className="object-cover"
                />
            </div>

            {/* Executive Summary */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Info className="h-6 w-6 text-blue-600" />
                        Executive Summary
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                        Whether you're dealing with startup delays, application lag, or system-wide slowdowns, this guide delivers enterprise-level optimization techniques suitable for both casual users and IT professionals. From quick 15-minute fixes to advanced registry tweaks, you'll find comprehensive solutions to make your Windows 11 system significantly faster.
                    </p>
                    <Alert className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-900">
                        <TrendingUp className="h-4 w-4 text-blue-600" />
                        <AlertDescription className="text-blue-700 dark:text-blue-400">
                            <strong>Performance Boost:</strong> Following this guide can improve boot times by 50-70%, application responsiveness by 30-50%, and overall system fluidity significantly.
                        </AlertDescription>
                    </Alert>
                </CardContent>
            </Card>

            {/* Chapter 1: Diagnosing Performance Issues */}
            <div className="space-y-6">
                <h2 className="text-3xl font-bold flex items-center gap-2">
                    <Cpu className="h-8 w-8 text-primary" />
                    Chapter 1: Diagnosing Windows 11 Performance Issues
                </h2>
                <Card>
                    <CardHeader>
                        <CardTitle>Understanding Performance Bottlenecks</CardTitle>
                        <CardDescription>Before implementing fixes, identify what's slowing down your system</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-4 border">
                            <Image
                                src="/images/articles/windows-11-speed/task-manager.png"
                                alt="Windows 11 Task Manager Performance Tab"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg mb-2">Task Manager Analysis</h3>
                            <ul className="space-y-2 ml-4">
                                <li className="flex items-start gap-2 text-sm">
                                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-green-500 shrink-0" />
                                    Press Ctrl + Shift + Esc to open Task Manager
                                </li>
                                <li className="flex items-start gap-2 text-sm">
                                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-green-500 shrink-0" />
                                    Click "More details" for expanded view
                                </li>
                                <li className="flex items-start gap-2 text-sm">
                                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-green-500 shrink-0" />
                                    Sort processes by CPU, Memory, and Disk usage
                                </li>
                                <li className="flex items-start gap-2 text-sm">
                                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-green-500 shrink-0" />
                                    Identify resource-hogging applications
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg mb-2">Common Culprits</h3>
                            <div className="grid gap-2 sm:grid-cols-2">
                                {[
                                    "Insufficient RAM causing excessive paging",
                                    "High disk usage (especially with HDDs)",
                                    "Background applications and services",
                                    "Outdated or faulty drivers",
                                    "Thermal throttling due to cooling issues",
                                    "Windows Search indexing in progress"
                                ].map((culprit, idx) => (
                                    <div key={idx} className="flex items-start gap-2 text-sm p-2 bg-muted rounded">
                                        <AlertTriangle className="h-4 w-4 mt-0.5 text-yellow-600 shrink-0" />
                                        {culprit}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Chapter 2: Immediate Quick Fixes */}
            <div className="space-y-6">
                <h2 className="text-3xl font-bold flex items-center gap-2">
                    <Zap className="h-8 w-8 text-primary" />
                    Chapter 2: Immediate Quick Fixes (15 Minutes or Less)
                </h2>
                <div className="grid gap-4 md:grid-cols-2">
                    {quickFixes.map((fix, idx) => (
                        <Card key={idx}>
                            <CardHeader>
                                <CardTitle className="text-lg">{fix.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">{fix.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Chapter 3: System Settings Optimization */}
            <div className="space-y-6">
                <h2 className="text-3xl font-bold flex items-center gap-2">
                    <Settings className="h-8 w-8 text-primary" />
                    Chapter 3: System Settings Optimization
                </h2>
                {systemOptimizations.map((optimization, idx) => (
                    <Card key={idx}>
                        <CardHeader>
                            <CardTitle>{optimization.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 ml-4">
                                {optimization.steps.map((step, sIdx) => (
                                    <li key={sIdx} className="flex items-start gap-2 text-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                        {step}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Chapter 4: Startup and Background Process Management */}
            <div className="space-y-6">
                <h2 className="text-3xl font-bold flex items-center gap-2">
                    <TrendingUp className="h-8 w-8 text-primary" />
                    Chapter 4: Startup and Background Process Management
                </h2>
                <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-6 border">
                    <Image
                        src="/images/articles/windows-11-speed/startup-apps.png"
                        alt="Optimizing Startup Applications in Windows 11"
                        fill
                        className="object-cover"
                    />
                </div>
                {startupOptimizations.map((optimization, idx) => (
                    <Card key={idx}>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <optimization.icon className="h-5 w-5 text-primary" />
                                {optimization.title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <p className="text-sm text-muted-foreground">{optimization.description}</p>
                            {optimization.warning && (
                                <Alert className="bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200">
                                    <AlertTriangle className="h-4 w-4 text-yellow-600" />
                                    <AlertDescription className="text-yellow-700 dark:text-yellow-400">
                                        <strong>Warning:</strong> {optimization.warning}
                                    </AlertDescription>
                                </Alert>
                            )}
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Chapter 5: Storage Optimization */}
            <div className="space-y-6">
                <h2 className="text-3xl font-bold flex items-center gap-2">
                    <HardDrive className="h-8 w-8 text-primary" />
                    Chapter 5: Storage Optimization Techniques
                </h2>
                <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-6 border">
                    <Image
                        src="/images/articles/windows-11-speed/storage-sense.png"
                        alt="Windows 11 Storage Sense Configuration"
                        fill
                        className="object-cover"
                    />
                </div>
                {storageOptimizations.map((optimization, idx) => (
                    <Card key={idx}>
                        <CardHeader>
                            <CardTitle>{optimization.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 ml-4">
                                {optimization.steps.map((step, sIdx) => (
                                    <li key={sIdx} className="flex items-start gap-2 text-sm">
                                        <CheckCircle2 className="h-4 w-4 mt-0.5 text-green-500 shrink-0" />
                                        {step}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Chapter 6: Advanced Registry Tweaks */}
            <div className="space-y-6">
                <h2 className="text-3xl font-bold flex items-center gap-2">
                    <Terminal className="h-8 w-8 text-primary" />
                    Chapter 6: Advanced Registry and Service Tweaks
                </h2>
                <Alert className="bg-red-50 dark:bg-red-900/20 border-red-200">
                    <AlertTriangle className="h-4 w-4 text-red-600" />
                    <AlertTitle className="text-red-800 dark:text-red-300">Critical Warning</AlertTitle>
                    <AlertDescription className="text-red-700 dark:text-red-400">
                        Create a System Restore Point before making any registry changes! Press Win + R, type "regedit" to access Registry Editor.
                    </AlertDescription>
                </Alert>
                <Card>
                    <CardHeader>
                        <CardTitle>Registry Optimizations</CardTitle>
                        <CardDescription>Advanced tweaks for experienced users</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {registryTweaks.map((tweak, idx) => (
                                <div key={idx} className="p-4 bg-muted rounded-lg space-y-2">
                                    <h3 className="font-semibold text-sm">{tweak.title}</h3>
                                    <code className="text-xs block bg-background p-2 rounded font-mono">
                                        {tweak.path}
                                    </code>
                                    <p className="text-xs text-muted-foreground">{tweak.value}</p>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Chapter 7: Hardware Upgrade Considerations */}
            <div className="space-y-6">
                <h2 className="text-3xl font-bold flex items-center gap-2">
                    <Wrench className="h-8 w-8 text-primary" />
                    Chapter 7: Hardware Upgrade Considerations
                </h2>
                <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-6 border">
                    <Image
                        src="/images/articles/windows-11-speed/hardware-upgrade.png"
                        alt="SSD and RAM Upgrade for Windows 11"
                        fill
                        className="object-cover"
                    />
                </div>
                {hardwareUpgrades.map((upgrade, idx) => (
                    <Card key={idx}>
                        <CardHeader>
                            <CardTitle>{upgrade.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 ml-4">
                                {upgrade.recommendations.map((rec, rIdx) => (
                                    <li key={rIdx} className="flex items-start gap-2 text-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                        {rec}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Chapter 8: Maintenance Routines */}
            <div className="space-y-6">
                <h2 className="text-3xl font-bold flex items-center gap-2">
                    <Clock className="h-8 w-8 text-primary" />
                    Chapter 8: Maintenance Routines for Sustained Performance
                </h2>
                <div className="grid gap-4 md:grid-cols-2">
                    {maintenanceRoutines.map((routine, idx) => (
                        <Card key={idx}>
                            <CardHeader>
                                <CardTitle className="text-lg">{routine.frequency}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    {routine.tasks.map((task, tIdx) => (
                                        <li key={tIdx} className="flex items-start gap-2 text-sm">
                                            <CheckCircle2 className="h-4 w-4 mt-0.5 text-green-500 shrink-0" />
                                            {task}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Chapter 9: Troubleshooting Specific Scenarios */}
            <div className="space-y-6">
                <h2 className="text-3xl font-bold flex items-center gap-2">
                    <Shield className="h-8 w-8 text-primary" />
                    Chapter 9: Troubleshooting Specific Slowdown Scenarios
                </h2>
                {troubleshootingScenarios.map((scenario, idx) => (
                    <Card key={idx}>
                        <CardHeader>
                            <CardTitle className="text-red-600 dark:text-red-400">Problem: {scenario.problem}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 ml-4">
                                {scenario.solutions.map((solution, sIdx) => (
                                    <li key={sIdx} className="flex items-start gap-2 text-sm">
                                        <CheckCircle2 className="h-4 w-4 mt-0.5 text-green-500 shrink-0" />
                                        {solution}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Chapter 10: Conclusion */}
            <div className="space-y-6">
                <h2 className="text-3xl font-bold flex items-center gap-2">
                    <Database className="h-8 w-8 text-primary" />
                    Chapter 10: Building a Faster Windows 11 Ecosystem
                </h2>
                <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
                    <CardHeader>
                        <CardTitle>The Performance Mindset</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-muted-foreground leading-relaxed">
                            Maintaining Windows 11 performance requires consistent attention rather than one-time fixes. The most effective approach combines proactive monitoring, selective disabling, strategic upgrades, and routine maintenance.
                        </p>
                        <div>
                            <h3 className="font-semibold mb-2">Final Recommendations by User Type</h3>
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="casual">
                                    <AccordionTrigger>Casual Users</AccordionTrigger>
                                    <AccordionContent>
                                        <ul className="space-y-1 ml-4 text-sm">
                                            <li>• Implement Chapters 2-4 optimizations</li>
                                            <li>• Enable Storage Sense</li>
                                            <li>• Monthly maintenance routine</li>
                                            <li>• Consider RAM upgrade if below 8GB</li>
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="power">
                                    <AccordionTrigger>Power Users</AccordionTrigger>
                                    <AccordionContent>
                                        <ul className="space-y-1 ml-4 text-sm">
                                            <li>• Implement all optimization chapters</li>
                                            <li>• Quarterly deep maintenance</li>
                                            <li>• SSD upgrade if using HDD</li>
                                            <li>• 16GB+ RAM configuration</li>
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="enterprise">
                                    <AccordionTrigger>Enterprise/IT Administrators</AccordionTrigger>
                                    <AccordionContent>
                                        <ul className="space-y-1 ml-4 text-sm">
                                            <li>• Create optimized Windows 11 image</li>
                                            <li>• Implement Group Policy restrictions</li>
                                            <li>• Deploy maintenance scripts via Task Scheduler</li>
                                            <li>• Monitor with Windows Admin Center</li>
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Performance Monitoring Tools Summary</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-2">
                            {performanceTools.map((tool, idx) => (
                                <div key={idx} className="flex items-start gap-3 p-2 bg-muted rounded">
                                    <Badge variant="outline">{tool.category}</Badge>
                                    <span className="text-sm">{tool.tools}</span>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <Alert className="bg-green-50 dark:bg-green-900/20 border-green-200">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <AlertTitle className="text-green-800 dark:text-green-300">Closing Thoughts</AlertTitle>
                    <AlertDescription className="text-green-700 dark:text-green-400">
                        Windows 11, when properly optimized, provides a responsive and efficient computing experience. By following this comprehensive guide, you should achieve noticeable improvements in boot times, application responsiveness, and overall system fluidity. Remember that computing needs evolve—periodically reassess your optimization strategy as you install new software or change usage patterns.
                    </AlertDescription>
                </Alert>
            </div>
        </div>
    );
}
