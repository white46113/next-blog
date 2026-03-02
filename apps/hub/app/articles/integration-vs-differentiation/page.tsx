import Link from "next/link";

export default function IntegrationVsDifferentiationPage() {
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Integration vs Differentiation Explained for Beginners",
        description:
            "A beginner-friendly guide to understanding differentiation and integration in calculus — with visual graphs, real-world examples, and step-by-step formulas.",
        author: { "@type": "Organization", name: "WeebCoder" },
        publisher: {
            "@type": "Organization",
            name: "WeebCoder",
            logo: { "@type": "ImageObject", url: "https://weebcoder.com/logo.png" },
        },
        datePublished: "2026-03-02",
        dateModified: "2026-03-02",
        url: "https://www.weebcoder.com/articles/integration-vs-differentiation",
        mainEntityOfPage: "https://www.weebcoder.com/articles/integration-vs-differentiation",
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "What is the difference between differentiation and integration?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Differentiation finds the rate of change (slope) of a function at any point, while integration finds the total accumulation (area under the curve) of a function over an interval. They are opposite operations — the Fundamental Theorem of Calculus links them together.",
                },
            },
            {
                "@type": "Question",
                name: "Which is harder — differentiation or integration?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Most beginners find differentiation easier to learn first because the rules (power rule, product rule) are more mechanical. Integration is often considered harder because there are many techniques (substitution, integration by parts) and not every function has a neat closed-form integral.",
                },
            },
            {
                "@type": "Question",
                name: "Are integration and differentiation inverse operations?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The Fundamental Theorem of Calculus states that differentiation and integration are inverse operations. If you integrate a function and then differentiate the result, you get back the original function.",
                },
            },
        ],
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* Breadcrumb */}
            <div className="max-w-4xl mx-auto px-4 pt-8">
                <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
                    <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
                    <span className="mx-2">/</span>
                    <span className="text-gray-400">Articles</span>
                    <span className="mx-2">/</span>
                    <span className="text-gray-700 font-medium">Integration vs Differentiation</span>
                </nav>
            </div>

            <article className="max-w-4xl mx-auto px-4 pb-20">

                {/* Article Header */}
                <header className="mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                        📐 Calculus for Beginners
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
                        Integration vs Differentiation:<br />
                        <span className="text-blue-600">A Beginner&apos;s Visual Guide</span>
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed mb-6">
                        If calculus feels confusing, you&apos;re not alone. In this guide, we break down
                        the two pillars of calculus — <strong>differentiation</strong> and <strong>integration</strong> —
                        with plain English, real-world analogies, interactive graphs, and beginner-friendly formulas.
                        No PhD required.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 border-t border-gray-200 pt-4">
                        <span>📅 March 2, 2026</span>
                        <span>•</span>
                        <span>⏱ 10 min read</span>
                        <span>•</span>
                        <span>✍️ WeebCoder</span>
                    </div>
                </header>

                {/* Table of Contents */}
                <nav
                    aria-label="Table of Contents"
                    className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-12"
                >
                    <h2 className="text-lg font-bold text-blue-800 mb-3">📋 What You&apos;ll Learn</h2>
                    <ol className="space-y-1 text-blue-700 text-sm list-decimal list-inside">
                        <li><a href="#what-is-calculus" className="hover:underline">What is Calculus?</a></li>
                        <li><a href="#what-is-differentiation" className="hover:underline">What is Differentiation?</a></li>
                        <li><a href="#differentiation-formulas" className="hover:underline">Differentiation Rules and Formulas</a></li>
                        <li><a href="#what-is-integration" className="hover:underline">What is Integration?</a></li>
                        <li><a href="#integration-formulas" className="hover:underline">Integration Rules and Formulas</a></li>
                        <li><a href="#side-by-side" className="hover:underline">Side-by-Side Comparison</a></li>
                        <li><a href="#fundamental-theorem" className="hover:underline">The Fundamental Theorem of Calculus</a></li>
                        <li><a href="#real-world" className="hover:underline">Real-World Examples</a></li>
                        <li><a href="#faq" className="hover:underline">Frequently Asked Questions</a></li>
                    </ol>
                </nav>

                {/* ── SECTION 1 ───────────────────────────────────── */}
                <section id="what-is-calculus" className="mb-14">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
                        What is Calculus?
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Calculus is the branch of mathematics that studies <strong>continuous change</strong>. It was
                        independently developed by <strong>Isaac Newton</strong> and <strong>Gottfried Wilhelm Leibniz</strong> in
                        the 17th century. Today, calculus underlies physics, engineering, economics, machine learning, and much more.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Calculus has two main operations:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
                            <div className="text-3xl mb-2">📉</div>
                            <h3 className="font-bold text-emerald-800 text-lg mb-1">Differentiation</h3>
                            <p className="text-emerald-700 text-sm">Measures <strong>how fast</strong> something changes at a specific moment — the slope of a curve.</p>
                        </div>
                        <div className="bg-purple-50 border border-purple-200 rounded-xl p-5">
                            <div className="text-3xl mb-2">📈</div>
                            <h3 className="font-bold text-purple-800 text-lg mb-1">Integration</h3>
                            <p className="text-purple-700 text-sm">Measures <strong>how much</strong> has accumulated over time — the area under a curve.</p>
                        </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                        Think of them as <strong>opposites</strong> — like multiplication and division, or addition and subtraction.
                        The beautiful connection between them is captured by the Fundamental Theorem of Calculus (more on that later).
                    </p>
                </section>

                {/* ── SECTION 2 ───────────────────────────────────── */}
                <section id="what-is-differentiation" className="mb-14">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 border-l-4 border-emerald-500 pl-4">
                        What is Differentiation?
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Differentiation answers the question: <em>"How is this value <strong>changing right now</strong>?"</em>
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Imagine you&apos;re driving a car. Your <strong>position</strong> tells you where you are. Differentiating
                        your position over time gives you your <strong>speed</strong>. Differentiating your speed gives you
                        your <strong>acceleration</strong>. Every derivative is a rate of change.
                    </p>

                    {/* SVG Graph: Tangent Line on a Curve */}
                    <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-6 shadow-sm">
                        <h3 className="font-semibold text-gray-700 mb-4 text-center">
                            Graph: The Derivative is the Slope of the Tangent Line
                        </h3>
                        <div className="flex justify-center">
                            <svg viewBox="0 0 400 260" className="w-full max-w-lg" aria-label="Graph showing a parabola with a tangent line representing the derivative at a point">
                                {/* Grid */}
                                {[0, 1, 2, 3, 4].map(i => (
                                    <line key={`hg${i}`} x1="40" y1={50 + i * 40} x2="380" y2={50 + i * 40} stroke="#f0f0f0" strokeWidth="1" />
                                ))}
                                {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                                    <line key={`vg${i}`} x1={40 + i * 42} y1="50" x2={40 + i * 42} y2="210" stroke="#f0f0f0" strokeWidth="1" />
                                ))}
                                {/* Axes */}
                                <line x1="40" y1="210" x2="380" y2="210" stroke="#374151" strokeWidth="2" />
                                <line x1="40" y1="50" x2="40" y2="220" stroke="#374151" strokeWidth="2" />
                                {/* Axis arrows */}
                                <polygon points="380,206 388,210 380,214" fill="#374151" />
                                <polygon points="36,50 40,42 44,50" fill="#374151" />
                                {/* Axis labels */}
                                <text x="385" y="215" fontSize="12" fill="#374151">x</text>
                                <text x="30" y="45" fontSize="12" fill="#374151">y</text>
                                {/* Parabola: y = x^2, scaled to SVG. x from -3 to 4, y = x^2 */}
                                {/* Map x: -3..4 → 40..380, y: 0..16 → 210..50 */}
                                <path
                                    d={Array.from({ length: 71 }, (_, i) => {
                                        const xVal = -3 + i * 0.1;
                                        const yVal = xVal * xVal;
                                        const svgX = 40 + ((xVal + 3) / 7) * 340;
                                        const svgY = 210 - (yVal / 16) * 160;
                                        return `${i === 0 ? "M" : "L"}${svgX.toFixed(1)},${svgY.toFixed(1)}`;
                                    }).join(" ")}
                                    fill="none" stroke="#10b981" strokeWidth="2.5"
                                />
                                {/* Point at x=1.5: y=2.25 */}
                                {(() => {
                                    const xVal = 1.5;
                                    const yVal = xVal * xVal;           // 2.25
                                    const svgX = 40 + ((xVal + 3) / 7) * 340;  // ≈ 262
                                    const svgY = 210 - (yVal / 16) * 160;       // ≈ 187.5
                                    // Tangent slope = 2*1.5 = 3  → in SVG units: dy/dx * (160/16)/(340/7) = 3 * 10/48.57 ≈ 0.617
                                    const svgSlope = 3 * (160 / 16) / (340 / 7);
                                    const dx = 60;
                                    return (
                                        <>
                                            <line
                                                x1={svgX - dx} y1={svgY + svgSlope * dx}
                                                x2={svgX + dx} y2={svgY - svgSlope * dx}
                                                stroke="#ef4444" strokeWidth="2" strokeDasharray="6,3"
                                            />
                                            <circle cx={svgX} cy={svgY} r="5" fill="#ef4444" />
                                            <text x={svgX + 8} y={svgY - 8} fontSize="11" fill="#ef4444" fontWeight="bold">
                                                slope = f′(x) = 3
                                            </text>
                                        </>
                                    );
                                })()}
                                {/* Curve label */}
                                <text x="310" y="70" fontSize="11" fill="#10b981" fontWeight="bold">y = x²</text>
                                {/* x tick labels */}
                                {[-2, -1, 0, 1, 2, 3].map(v => {
                                    const sx = 40 + ((v + 3) / 7) * 340;
                                    return <text key={v} x={sx - 4} y="225" fontSize="10" fill="#6b7280">{v}</text>;
                                })}
                            </svg>
                        </div>
                        <p className="text-center text-sm text-gray-500 mt-3">
                            The red dashed line is the <strong>tangent</strong> at x = 1.5 on the curve y = x².
                            Its slope (3) is the derivative f′(1.5).
                        </p>
                    </div>

                    <p className="text-gray-700 leading-relaxed">
                        Formally, the derivative of a function f(x) is defined as:
                    </p>
                    <div className="bg-gray-900 text-green-400 rounded-xl p-5 my-5 font-mono text-center text-lg overflow-x-auto">
                        <span className="text-white">f′(x)</span> = lim<sub className="text-yellow-400">h→0</sub>{" "}
                        <span className="text-yellow-400">[f(x + h) − f(x)] / h</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                        This is called the <strong>limit definition of the derivative</strong>. In practice, we use simpler
                        rules so we don&apos;t have to compute limits every time.
                    </p>
                </section>

                {/* ── SECTION 3 ───────────────────────────────────── */}
                <section id="differentiation-formulas" className="mb-14">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 border-l-4 border-emerald-500 pl-4">
                        Differentiation Rules and Formulas
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        You don&apos;t need to use the limit definition every time. These rules let you differentiate
                        almost any function quickly:
                    </p>
                    <div className="space-y-4">
                        {[
                            {
                                name: "Power Rule",
                                rule: "d/dx [xⁿ] = n · xⁿ⁻¹",
                                example: "d/dx [x³] = 3x²",
                                color: "emerald",
                                note: "Bring the exponent down and reduce it by 1. Works for any constant n.",
                            },
                            {
                                name: "Constant Rule",
                                rule: "d/dx [c] = 0",
                                example: "d/dx [7] = 0",
                                color: "blue",
                                note: "A constant doesn't change, so its rate of change is always zero.",
                            },
                            {
                                name: "Sum / Difference Rule",
                                rule: "d/dx [f ± g] = f′ ± g′",
                                example: "d/dx [x² + x] = 2x + 1",
                                color: "violet",
                                note: "Differentiate each term separately.",
                            },
                            {
                                name: "Product Rule",
                                rule: "d/dx [f · g] = f′g + fg′",
                                example: "d/dx [x² · sin(x)] = 2x·sin(x) + x²·cos(x)",
                                color: "orange",
                                note: "Use this when two functions are multiplied together.",
                            },
                            {
                                name: "Chain Rule",
                                rule: "d/dx [f(g(x))] = f′(g(x)) · g′(x)",
                                example: "d/dx [(x²+1)³] = 3(x²+1)² · 2x",
                                color: "red",
                                note: "Use this for composite functions (a function inside another function).",
                            },
                            {
                                name: "Common Derivatives",
                                rule: "d/dx[sin x]=cos x  |  d/dx[cos x]=−sin x  |  d/dx[eˣ]=eˣ  |  d/dx[ln x]=1/x",
                                example: "d/dx [eˣ] = eˣ",
                                color: "teal",
                                note: "Memorise these — they appear everywhere in calculus.",
                            },
                        ].map((item) => (
                            <div
                                key={item.name}
                                className={`bg-${item.color}-50 border border-${item.color}-200 rounded-xl p-5`}
                            >
                                <h3 className={`font-bold text-${item.color}-800 text-base mb-2`}>{item.name}</h3>
                                <div className="bg-white rounded-lg px-4 py-2 font-mono text-sm mb-2 border border-gray-100 overflow-x-auto">
                                    {item.rule}
                                </div>
                                <div className={`text-${item.color}-700 text-xs font-semibold`}>
                                    Example: <span className="font-mono">{item.example}</span>
                                </div>
                                <p className={`text-${item.color}-600 text-xs mt-1`}>{item.note}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── SECTION 4 ───────────────────────────────────── */}
                <section id="what-is-integration" className="mb-14">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 border-l-4 border-purple-500 pl-4">
                        What is Integration?
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Integration answers the question: <em>"How much has <strong>accumulated</strong>?"</em>
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Back to the driving example: if you know your <strong>speed</strong> at every moment, integrating
                        it over time gives you the <strong>total distance</strong> you&apos;ve traveled. Integration adds up
                        infinitely many tiny pieces to compute a total.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        Visually, the definite integral of a function between two points equals the
                        <strong> area under the curve</strong> between those points.
                    </p>

                    {/* SVG Graph: Area Under Curve */}
                    <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-6 shadow-sm">
                        <h3 className="font-semibold text-gray-700 mb-4 text-center">
                            Graph: The Integral is the Area Under the Curve
                        </h3>
                        <div className="flex justify-center">
                            <svg viewBox="0 0 400 260" className="w-full max-w-lg" aria-label="Graph showing the area under a parabola between two points, representing a definite integral">
                                {/* Grid */}
                                {[0, 1, 2, 3, 4].map(i => (
                                    <line key={`hg${i}`} x1="40" y1={50 + i * 40} x2="380" y2={50 + i * 40} stroke="#f0f0f0" strokeWidth="1" />
                                ))}
                                {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                                    <line key={`vg${i}`} x1={40 + i * 42} y1="50" x2={40 + i * 42} y2="210" stroke="#f0f0f0" strokeWidth="1" />
                                ))}
                                {/* Axes */}
                                <line x1="40" y1="210" x2="380" y2="210" stroke="#374151" strokeWidth="2" />
                                <line x1="40" y1="50" x2="40" y2="220" stroke="#374151" strokeWidth="2" />
                                <polygon points="380,206 388,210 380,214" fill="#374151" />
                                <polygon points="36,50 40,42 44,50" fill="#374151" />
                                <text x="385" y="215" fontSize="12" fill="#374151">x</text>
                                <text x="30" y="45" fontSize="12" fill="#374151">y</text>
                                {/* Shaded area under parabola from x=0 to x=2 */}
                                {/* SVG space: x(−3..4)→40..380, y(0..16)→210..50 */}
                                {(() => {
                                    const toSvgX = (x: number) => 40 + ((x + 3) / 7) * 340;
                                    const toSvgY = (y: number) => 210 - (y / 16) * 160;
                                    const steps = 40;
                                    const areaPoints = Array.from({ length: steps + 1 }, (_, i) => {
                                        const xVal = 0 + i * (2 / steps);
                                        return `${toSvgX(xVal).toFixed(1)},${toSvgY(xVal * xVal).toFixed(1)}`;
                                    });
                                    const startX = toSvgX(0);
                                    const endX = toSvgX(2);
                                    const baseY = toSvgY(0);
                                    const areaPath = `M${startX},${baseY} ` + areaPoints.map(p => `L${p}`).join(" ") + ` L${endX},${baseY} Z`;
                                    return (
                                        <>
                                            <path d={areaPath} fill="#a855f7" fillOpacity="0.25" stroke="none" />
                                            {/* Curve */}
                                            <path
                                                d={Array.from({ length: 71 }, (_, i) => {
                                                    const xVal = -3 + i * 0.1;
                                                    const yVal = xVal * xVal;
                                                    const svgX = toSvgX(xVal);
                                                    const svgY = toSvgY(yVal);
                                                    return `${i === 0 ? "M" : "L"}${svgX.toFixed(1)},${svgY.toFixed(1)}`;
                                                }).join(" ")}
                                                fill="none" stroke="#a855f7" strokeWidth="2.5"
                                            />
                                            {/* Vertical bounds */}
                                            <line x1={startX} y1={baseY} x2={startX} y2={toSvgY(0)} stroke="#a855f7" strokeWidth="1.5" strokeDasharray="4,3" />
                                            <line x1={endX} y1={baseY} x2={endX} y2={toSvgY(4)} stroke="#a855f7" strokeWidth="1.5" strokeDasharray="4,3" />
                                            {/* Labels */}
                                            <text x={startX - 4} y={baseY + 16} fontSize="11" fill="#7c3aed" fontWeight="bold">0</text>
                                            <text x={endX - 4} y={baseY + 16} fontSize="11" fill="#7c3aed" fontWeight="bold">2</text>
                                            <text x={(startX + endX) / 2 - 30} y={(toSvgY(4 / 3) + baseY) / 2 + 5} fontSize="12" fill="#7c3aed" fontWeight="bold">Area = 8/3</text>
                                        </>
                                    );
                                })()}
                                <text x="300" y="70" fontSize="11" fill="#a855f7" fontWeight="bold">y = x²</text>
                                {/* x tick labels */}
                                {[-2, -1, 0, 1, 2, 3].map(v => {
                                    const sx = 40 + ((v + 3) / 7) * 340;
                                    return <text key={v} x={sx - 4} y="225" fontSize="10" fill="#6b7280">{v}</text>;
                                })}
                            </svg>
                        </div>
                        <p className="text-center text-sm text-gray-500 mt-3">
                            The purple shaded area under y = x² from x = 0 to x = 2 equals{" "}
                            <strong>∫₀² x² dx = 8/3 ≈ 2.67</strong>
                        </p>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-4">
                        There are two types of integrals:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div className="bg-purple-50 border border-purple-200 rounded-xl p-5">
                            <h3 className="font-bold text-purple-800 mb-2">Indefinite Integral</h3>
                            <div className="font-mono bg-white rounded px-3 py-2 text-sm mb-2 border">∫ f(x) dx = F(x) + C</div>
                            <p className="text-purple-700 text-sm">No specific bounds. Returns a <strong>function</strong> + constant C. Represents the antiderivative.</p>
                        </div>
                        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-5">
                            <h3 className="font-bold text-indigo-800 mb-2">Definite Integral</h3>
                            <div className="font-mono bg-white rounded px-3 py-2 text-sm mb-2 border">∫ₐᵇ f(x) dx = F(b) − F(a)</div>
                            <p className="text-indigo-700 text-sm">Has bounds a and b. Returns a <strong>number</strong> — the exact area between a and b.</p>
                        </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                        The <strong>+C</strong> in the indefinite integral is called the <em>constant of integration</em>. Because
                        differentiation destroys constants (d/dx[5] = 0), we must acknowledge that infinitely many
                        functions could share the same derivative — they&apos;re just shifted vertically by a constant.
                    </p>
                </section>

                {/* ── SECTION 5 ───────────────────────────────────── */}
                <section id="integration-formulas" className="mb-14">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 border-l-4 border-purple-500 pl-4">
                        Integration Rules and Formulas
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        Integration is often trickier than differentiation, but these core rules handle the majority of
                        problems you&apos;ll encounter as a beginner:
                    </p>
                    <div className="space-y-4">
                        {[
                            {
                                name: "Power Rule for Integration",
                                rule: "∫ xⁿ dx = xⁿ⁺¹ / (n+1) + C   (where n ≠ −1)",
                                example: "∫ x³ dx = x⁴/4 + C",
                                color: "purple",
                                note: "Raise the exponent by 1 and divide by the new exponent. Opposite of the power rule for differentiation.",
                            },
                            {
                                name: "Constant Multiple Rule",
                                rule: "∫ c·f(x) dx = c · ∫ f(x) dx",
                                example: "∫ 5x² dx = 5 · x³/3 + C",
                                color: "indigo",
                                note: "Constants slide outside the integral.",
                            },
                            {
                                name: "Sum / Difference Rule",
                                rule: "∫ [f(x) ± g(x)] dx = ∫f dx ± ∫g dx",
                                example: "∫ (x² + x) dx = x³/3 + x²/2 + C",
                                color: "violet",
                                note: "Integrate each term separately.",
                            },
                            {
                                name: "Common Integrals",
                                rule: "∫eˣdx = eˣ+C  |  ∫(1/x)dx = ln|x|+C  |  ∫cos(x)dx = sin(x)+C  |  ∫sin(x)dx = −cos(x)+C",
                                example: "∫ eˣ dx = eˣ + C",
                                color: "pink",
                                note: "These match the common derivative table — just reversed.",
                            },
                            {
                                name: "Substitution Rule (u-substitution)",
                                rule: "∫ f(g(x))·g′(x) dx = ∫ f(u) du   where u = g(x)",
                                example: "∫ 2x·(x²+1)³ dx  →  let u=x²+1, du=2x dx  →  ∫u³du = u⁴/4 + C",
                                color: "rose",
                                note: "The reverse of the chain rule. Simplifies composite integrals.",
                            },
                        ].map((item) => (
                            <div
                                key={item.name}
                                className={`bg-${item.color}-50 border border-${item.color}-200 rounded-xl p-5`}
                            >
                                <h3 className={`font-bold text-${item.color}-800 text-base mb-2`}>{item.name}</h3>
                                <div className="bg-white rounded-lg px-4 py-2 font-mono text-sm mb-2 border border-gray-100 overflow-x-auto whitespace-pre-wrap break-all">
                                    {item.rule}
                                </div>
                                <div className={`text-${item.color}-700 text-xs font-semibold`}>
                                    Example: <span className="font-mono">{item.example}</span>
                                </div>
                                <p className={`text-${item.color}-600 text-xs mt-1`}>{item.note}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── SECTION 6 ───────────────────────────────────── */}
                <section id="side-by-side" className="mb-14">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
                        Side-by-Side Comparison
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        Here&apos;s a clear table showing the key differences between the two operations:
                    </p>
                    <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="bg-gray-900 text-white">
                                    <th className="px-5 py-4 text-left font-semibold">Feature</th>
                                    <th className="px-5 py-4 text-left font-semibold text-emerald-400">Differentiation</th>
                                    <th className="px-5 py-4 text-left font-semibold text-purple-400">Integration</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {[
                                    ["Question answered", "How fast is it changing?", "How much has accumulated?"],
                                    ["Symbol", "d/dx or f′(x)", "∫ f(x) dx"],
                                    ["Visual meaning", "Slope of tangent line", "Area under the curve"],
                                    ["Result type", "Another function", "Function + C (or a number)"],
                                    ["Core rule", "Power: d/dx[xⁿ] = nxⁿ⁻¹", "Power: ∫xⁿdx = xⁿ⁺¹/(n+1)+C"],
                                    ["Difficulty", "More mechanical", "Often requires more strategy"],
                                    ["Real-world use", "Speed from position", "Distance from speed"],
                                    ["Inverse of?", "Integration", "Differentiation"],
                                ].map(([feat, diff, integ], i) => (
                                    <tr key={feat} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                                        <td className="px-5 py-3 font-medium text-gray-800">{feat}</td>
                                        <td className="px-5 py-3 text-emerald-700 font-mono text-xs">{diff}</td>
                                        <td className="px-5 py-3 text-purple-700 font-mono text-xs">{integ}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* SVG: Side-by-side conceptual graph */}
                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                        {/* Differentiation graph */}
                        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4">
                            <h3 className="font-bold text-emerald-800 text-center mb-3">Differentiation → Slope</h3>
                            <svg viewBox="0 0 200 140" className="w-full" aria-label="Differentiation: slope of a curve">
                                <line x1="20" y1="120" x2="190" y2="120" stroke="#374151" strokeWidth="1.5" />
                                <line x1="20" y1="10" x2="20" y2="120" stroke="#374151" strokeWidth="1.5" />
                                <path
                                    d={Array.from({ length: 30 }, (_, i) => {
                                        const x = i * 5.5 + 25;
                                        const t = i / 29;
                                        const y = 110 - 90 * t * t;
                                        return `${i === 0 ? "M" : "L"}${x},${y}`;
                                    }).join(" ")}
                                    fill="none" stroke="#10b981" strokeWidth="2"
                                />
                                {/* tangent at midpoint */}
                                <line x1="90" y1="75" x2="160" y2="35" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4,2" />
                                <circle cx="125" cy="55" r="4" fill="#ef4444" />
                                <text x="130" y="48" fontSize="9" fill="#ef4444" fontWeight="bold">slope = f′(x)</text>
                            </svg>
                        </div>
                        {/* Integration graph */}
                        <div className="bg-purple-50 border border-purple-200 rounded-2xl p-4">
                            <h3 className="font-bold text-purple-800 text-center mb-3">Integration → Area</h3>
                            <svg viewBox="0 0 200 140" className="w-full" aria-label="Integration: area under a curve">
                                <line x1="20" y1="120" x2="190" y2="120" stroke="#374151" strokeWidth="1.5" />
                                <line x1="20" y1="10" x2="20" y2="120" stroke="#374151" strokeWidth="1.5" />
                                {/* Shaded area */}
                                <path
                                    d={`M50,120 ${Array.from({ length: 20 }, (_, i) => {
                                        const x = 50 + i * 6;
                                        const t = i / 19;
                                        const y = 110 - 80 * t * (1 - t) * 4;
                                        return `L${x},${y}`;
                                    }).join(" ")} L166,120 Z`}
                                    fill="#a855f7" fillOpacity="0.3"
                                />
                                <path
                                    d={Array.from({ length: 25 }, (_, i) => {
                                        const x = i * 6.5 + 25;
                                        const t = i / 24;
                                        const y = 110 - 80 * t * (1 - t) * 4;
                                        return `${i === 0 ? "M" : "L"}${x},${y}`;
                                    }).join(" ")}
                                    fill="none" stroke="#a855f7" strokeWidth="2"
                                />
                                <text x="85" y="100" fontSize="9" fill="#7c3aed" fontWeight="bold">∫f(x)dx</text>
                            </svg>
                        </div>
                    </div>
                </section>

                {/* ── SECTION 7 ───────────────────────────────────── */}
                <section id="fundamental-theorem" className="mb-14">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 border-l-4 border-yellow-500 pl-4">
                        The Fundamental Theorem of Calculus
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        The <strong>Fundamental Theorem of Calculus (FTC)</strong> is arguably the most important result in all of
                        mathematics. It bridges differentiation and integration, proving they are inverse operations.
                    </p>

                    <div className="grid md:grid-cols-2 gap-5 mb-6">
                        <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-5">
                            <h3 className="font-bold text-yellow-800 mb-3">Part 1 — The Derivative of an Integral</h3>
                            <div className="bg-white font-mono text-sm rounded p-3 border mb-2">
                                If F(x) = ∫ₐˣ f(t) dt<br />then F′(x) = f(x)
                            </div>
                            <p className="text-yellow-700 text-sm">
                                Differentiating an integral gives back the original function. They undo each other.
                            </p>
                        </div>
                        <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-5">
                            <h3 className="font-bold text-amber-800 mb-3">Part 2 — Evaluating Definite Integrals</h3>
                            <div className="bg-white font-mono text-sm rounded p-3 border mb-2">
                                ∫ₐᵇ f(x) dx = F(b) − F(a)<br />where F′(x) = f(x)
                            </div>
                            <p className="text-amber-700 text-sm">
                                To find a definite integral, compute the antiderivative F(x), then subtract F(a) from F(b).
                            </p>
                        </div>
                    </div>

                    <div className="bg-yellow-100 border border-yellow-300 rounded-xl p-5">
                        <h3 className="font-semibold text-yellow-900 mb-2">✏️ Worked Example Using FTC Part 2</h3>
                        <p className="text-gray-800 text-sm mb-3">Calculate <strong>∫₁³ x² dx</strong></p>
                        <div className="space-y-2 text-sm font-mono text-gray-800">
                            <div className="bg-white rounded p-2 border">Step 1: Find the antiderivative → F(x) = x³/3</div>
                            <div className="bg-white rounded p-2 border">Step 2: Apply bounds → F(3) − F(1) = 27/3 − 1/3</div>
                            <div className="bg-white rounded p-2 border">Step 3: Simplify → = 9 − 1/3 = <strong>26/3 ≈ 8.67</strong></div>
                        </div>
                    </div>
                </section>

                {/* ── SECTION 8 ───────────────────────────────────── */}
                <section id="real-world" className="mb-14">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
                        Real-World Examples of Each Operation
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        Calculus isn&apos;t just abstract math — it&apos;s the engine behind the physical world. Here&apos;s where
                        you&apos;ll encounter both operations in everyday science and engineering:
                    </p>
                    <div className="space-y-5">
                        {[
                            {
                                emoji: "🚗",
                                title: "Speed and Distance",
                                diff: "Differentiate position → speed (How fast are you going right now?)",
                                integ: "Integrate speed → distance (How far did you travel in 2 hours?)",
                            },
                            {
                                emoji: "🌡️",
                                title: "Temperature Change",
                                diff: "Differentiate temperature curve → rate of heating or cooling at a moment",
                                integ: "Integrate heat flow rate → total heat energy transferred over time",
                            },
                            {
                                emoji: "💰",
                                title: "Economics / Finance",
                                diff: "Differentiate revenue → marginal revenue (profit from one extra unit)",
                                integ: "Integrate marginal cost → total cost of producing n units",
                            },
                            {
                                emoji: "🤖",
                                title: "Machine Learning",
                                diff: "Gradient descent uses derivatives to find the minimum of a loss function",
                                integ: "Probability distributions use integration to calculate likelihoods over ranges",
                            },
                            {
                                emoji: "⚡",
                                title: "Electrical Engineering",
                                diff: "Differentiate charge → current (how charge changes per second)",
                                integ: "Integrate current → total charge stored in a capacitor",
                            },
                        ].map((item) => (
                            <div key={item.title} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm flex gap-4">
                                <div className="text-4xl flex-shrink-0">{item.emoji}</div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                                    <div className="flex flex-col gap-1">
                                        <div className="text-sm text-emerald-700 bg-emerald-50 rounded px-3 py-1">
                                            <strong>Differentiation:</strong> {item.diff}
                                        </div>
                                        <div className="text-sm text-purple-700 bg-purple-50 rounded px-3 py-1">
                                            <strong>Integration:</strong> {item.integ}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── SECTION 9: FAQ ───────────────────────────────── */}
                <section id="faq" className="mb-14">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 border-l-4 border-gray-400 pl-4">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-4">
                        {[
                            {
                                q: "What is the difference between differentiation and integration?",
                                a: "Differentiation finds the rate of change (slope) of a function at any point, while integration finds the total accumulation (area under the curve) over an interval. They are inverse operations linked by the Fundamental Theorem of Calculus.",
                            },
                            {
                                q: "Which is harder — differentiation or integration?",
                                a: "Most beginners find differentiation easier first because the rules (power rule, product rule) are more mechanical. Integration is considered harder because there are many techniques and not every function has a neat closed-form integral.",
                            },
                            {
                                q: "What does the + C mean in integration?",
                                a: "The constant C (constant of integration) appears in indefinite integrals because differentiation destroys constants. Many different functions could have the same derivative — they're just shifted vertically. C accounts for all of them.",
                            },
                            {
                                q: "Can every function be differentiated or integrated?",
                                a: "Most smooth functions you'll encounter can be differentiated everywhere. Integration is trickier — some functions have no closed-form integral (like e^(−x²)) and must be handled numerically or with special functions.",
                            },
                            {
                                q: "How are differentiation and integration used in programming?",
                                a: "Derivatives are at the core of machine learning — gradient descent uses them to minimize error. Numerical integration is used in physics simulations, finance (option pricing), and statistics (computing probabilities under curves).",
                            },
                        ].map((item, i) => (
                            <details key={i} className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                                <summary className="cursor-pointer px-5 py-4 font-semibold text-gray-800 flex justify-between items-center list-none">
                                    {item.q}
                                    <span className="text-gray-400 group-open:rotate-180 transition-transform duration-200 ml-3 flex-shrink-0">▾</span>
                                </summary>
                                <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">
                                    {item.a}
                                </div>
                            </details>
                        ))}
                    </div>
                </section>

                {/* Closing Summary */}
                <section className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center mb-10">
                    <h2 className="text-2xl font-bold mb-3">The Big Picture</h2>
                    <p className="text-blue-100 leading-relaxed max-w-xl mx-auto mb-4">
                        Differentiation and integration are two sides of the same coin. Differentiation asks
                        <em> &quot;How fast?&quot;</em> and integration asks <em>&quot;How much?&quot;</em>. The Fundamental Theorem
                        of Calculus ties them together into one unified, breathtaking idea.
                    </p>
                    <div className="bg-white/20 backdrop-blur rounded-xl p-4 font-mono text-lg font-bold tracking-wide">
                        d/dx [∫f(x)dx] = f(x)
                    </div>
                    <p className="text-blue-200 text-sm mt-3">Differentiate an integral → get back the original function.</p>
                </section>

                {/* Navigation */}
                <div className="flex justify-between items-center border-t border-gray-200 pt-8">
                    <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
                        ← Back to Home
                    </Link>
                    <Link href="/tools/json-editor" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium">
                        Try JSON Editor →
                    </Link>
                </div>
            </article>
        </div>
    );
}
