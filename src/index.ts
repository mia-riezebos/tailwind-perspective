import plugin from "tailwindcss/plugin";

export const perspective = plugin(
        function ({ addBase, addUtilities, matchUtilities, theme }) {
                addBase({
                        "*, ::before, ::after": {
                                "--tw-translate-x": "0",
                                "--tw-translate-y": "0",
                                "--tw-translate-z": "0",
                                "--tw-rotate-x": "0",
                                "--tw-rotate-y": "0",
                                "--tw-rotate-z": "0",
                                "--tw-skew-x": "0",
                                "--tw-skew-y": "0",
                                "--tw-scale-x": "1",
                                "--tw-scale-y": "1",
                                "--tw-scale-z": "1",
                                // '--tw-self-perspective': '0',
                                "--tw-transform": [
                                        "translateX(var(--tw-translate-x))",
                                        "translateY(var(--tw-translate-y))",
                                        "translateZ(var(--tw-translate-z))",
                                        "rotateX(var(--tw-rotate-x))",
                                        "rotateY(var(--tw-rotate-y))",
                                        "rotateZ(var(--tw-rotate-z))",
                                        "scaleX(var(--tw-scale-x))",
                                        "scaleY(var(--tw-scale-y))",
                                        "scaleZ(var(--tw-scale-z))",
                                        "skewX(var(--tw-skew-x))",
                                        "skewY(var(--tw-skew-y))",
                                ].join(" "),
                        },
                });

                addUtilities({
                        ".transform-style-flat": {
                                "transform-style": "flat",
                        },
                        ".transform-style-3d": {
                                "transform-style": "preserve-3d",
                        },
                });

                addUtilities({
                        ".backface-visible": {
                                "backface-visibility": "visible",
                        },
                        ".backface-hidden": {
                                "backface-visibility": "hidden",
                        },
                });

                addUtilities({
                        ".transform-3d-none": { transform: "none" },
                        // '.transform-3d': {
                        //     '@defaults transform': {},
                        //     transform: 'var(--tw-transform)',
                        // }
                });

                // Perspective Origin Utilities
                matchUtilities(
                        {
                                "perspective-origin": (value) => ({
                                        perspectiveOrigin: value,
                                }),
                        },
                        { values: theme("transformOrigin") }
                );

                // Perspective Utilities
                matchUtilities(
                        {
                                perspective: (value) => ({
                                        "--tw-perspective": value,
                                        "-webkit-perspective": value,
                                        perspective: value,
                                }),
                        },
                        {
                                values: {
                                        ...theme("perspective"),
                                        ...theme("translate"),
                                },
                                modifiers: "any",
                                supportsNegativeValues: true,
                        }
                );

                // Translate Utilities
                matchUtilities(
                        {
                                "translate-x": (value) => ({
                                        "--tw-translate-x": value,
                                        transform: "var(--tw-transform)",
                                }),
                                "translate-y": (value) => ({
                                        "--tw-translate-y": value,
                                        transform: "var(--tw-transform)",
                                }),
                                "translate-z": (value) => ({
                                        "--tw-translate-z": value,
                                        transform: "var(--tw-transform)",
                                }),
                        },
                        {
                                values: theme("translate"),
                                supportsNegativeValues: true,
                                modifiers: "any",
                        }
                );

                // Rotate Utilities
                matchUtilities(
                        {
                                "rotate-x": (value) => ({
                                        "--tw-rotate-x": value,
                                        transform: "var(--tw-transform)",
                                }),
                                "rotate-y": (value) => ({
                                        "--tw-rotate-y": value,
                                        transform: "var(--tw-transform)",
                                }),
                                "rotate-z": (value) => ({
                                        "--tw-rotate-z": value,
                                        transform: "var(--tw-transform)",
                                }),
                                rotate: (value) => ({
                                        "--tw-rotate-z": value,
                                        transform: "var(--tw-transform)",
                                }),
                        },
                        {
                                values: theme("rotate"),
                                modifiers: "any",
                                supportsNegativeValues: true,
                        }
                );

                // Scale Utilities
                matchUtilities(
                        {
                                "scale-x": (value) => ({
                                        "--tw-scale-x": value,
                                        transform: "var(--tw-transform)",
                                }),
                                "scale-y": (value) => ({
                                        "--tw-scale-y": value,
                                        transform: "var(--tw-transform)",
                                }),
                                "scale-z": (value) => ({
                                        "--tw-scale-z": value,
                                        transform: "var(--tw-transform)",
                                }),
                        },
                        {
                                values: theme("scale"),
                                modifiers: "any",
                                supportsNegativeValues: true,
                        }
                );

                // Skew Utilities
                matchUtilities(
                        {
                                "skew-x": (value) => ({
                                        "--tw-skew-x": value,
                                        transform: "var(--tw-transform)",
                                }),
                                "skew-y": (value) => ({
                                        "--tw-skew-y": value,
                                        transform: "var(--tw-transform)",
                                }),
                        },
                        {
                                values: theme("skew"),
                                modifiers: "any",
                                supportsNegativeValues: true,
                        }
                );
        },
        {
                theme: {
                        extend: {
                                spacing: {
                                        half: "calc(100% * 1/2)",
                                        third: "calc(100% * 1/3)",
                                        quarter: "calc(100% * 1/4)",
                                        fifth: "calc(100% * 1/5)",
                                        sixth: "calc(100% * 1/6)",
                                        seventh: "calc(100% * 1/7)",
                                        eighth: "calc(100% * 1/8)",

                                        "two-thirds": "calc(100% * 2/3)",
                                        "two-quarters": "calc(100% * 2/4)",
                                        "two-fifths": "calc(100% * 2/5)",
                                        "two-sixths": "calc(100% * 2/6)",
                                        "two-sevenths": "calc(100% * 2/7)",
                                        "two-eighths": "calc(100% * 2/8)",

                                        "three-quarters": "calc(100% * 3/4)",
                                        "three-fifths": "calc(100% * 3/5)",
                                        "three-sixths": "calc(100% * 3/6)",
                                        "three-sevenths": "calc(100% * 3/7)",
                                        "three-eighths": "calc(100% * 3/8)",

                                        "four-fifths": "calc(100% * 4/5)",
                                        "four-sixths": "calc(100% * 4/6)",
                                        "four-sevenths": "calc(100% * 4/7)",
                                        "four-eighths": "calc(100% * 4/8)",

                                        "five-sixths": "calc(100% * 5/6)",
                                        "five-sevenths": "calc(100% * 5/7)",
                                        "five-eighths": "calc(100% * 5/8)",

                                        "six-sevenths": "calc(100% * 6/7)",
                                        "six-eighths": "calc(100% * 6/8)",

                                        "seven-eighths": "calc(100% * 7/8)",

                                        "1h": "calc(100% * 1/2)",
                                        "1t": "calc(100% * 1/3)",
                                        "1q": "calc(100% * 1/4)",
                                        "1f": "calc(100% * 1/5)",
                                        "1x": "calc(100% * 1/6)",
                                        "1s": "calc(100% * 1/7)",
                                        "1e": "calc(100% * 1/8)",

                                        "2t": "calc(100% * 2/3)",
                                        "2q": "calc(100% * 2/4)",
                                        "2f": "calc(100% * 2/5)",
                                        "2x": "calc(100% * 2/6)",
                                        "2s": "calc(100% * 2/7)",
                                        "2e": "calc(100% * 2/8)",

                                        "3q": "calc(100% * 3/4)",
                                        "3f": "calc(100% * 3/5)",
                                        "3x": "calc(100% * 3/6)",
                                        "3s": "calc(100% * 3/7)",
                                        "3e": "calc(100% * 3/8)",

                                        "4f": "calc(100% * 4/5)",
                                        "4x": "calc(100% * 4/6)",
                                        "4s": "calc(100% * 4/7)",
                                        "4e": "calc(100% * 4/8)",

                                        "5x": "calc(100% * 5/6)",
                                        "5s": "calc(100% * 5/7)",
                                        "5e": "calc(100% * 5/8)",

                                        "6s": "calc(100% * 6/7)",
                                        "6e": "calc(100% * 6/8)",

                                        "7e": "calc(100% * 7/8)",

                                        "1w": "calc(100% * 1/1)",
                                        "1.125w": "calc(100% * 1.125/1)",
                                        "1.25w": "calc(100% * 1.25/1)",
                                        "1.375w": "calc(100% * 1.375/1)",
                                        "1.5w": "calc(100% * 1.5/1)",
                                        "1.625w": "calc(100% * 1.625/1)",
                                        "1.75w": "calc(100% * 1.75/1)",
                                        "1.875w": "calc(100% * 1.875/1)",
                                        "2w": "calc(100% * 2/1)",
                                        "2.25w": "calc(100% * 2.25/1)",
                                        "2.5w": "calc(100% * 2.5/1)",
                                        "2.75w": "calc(100% * 2.75/1)",
                                        "3w": "calc(100% * 3/1)",
                                        "3.25w": "calc(100% * 3.25/1)",
                                        "3.5w": "calc(100% * 3.5/1)",
                                        "3.75w": "calc(100% * 3.75/1)",
                                        "4w": "calc(100% * 4/1)",
                                        "4.25w": "calc(100% * 4.25/1)",
                                        "4.5w": "calc(100% * 4.5/1)",
                                        "4.75w": "calc(100% * 4.75/1)",
                                        "5w": "calc(100% * 5/1)",
                                        "5.5w": "calc(100% * 5.5/1)",
                                        "6w": "calc(100% * 6/1)",
                                        "6.25w": "calc(100% * 6.25/1)",
                                        "6.5w": "calc(100% * 6.5/1)",
                                        "7w": "calc(100% * 7/1)",
                                        "7.5w": "calc(100% * 7.5/1)",
                                        "8w": "calc(100% * 8/1)",
                                        "9w": "calc(100% * 9/1)",
                                        "10w": "calc(100% * 10/1)",
                                },
                        },
                        perspective: {
                                none: "none",
                                100: "100px",
                                200: "200px",
                                300: "300px",
                                400: "600px",
                                500: "500px",
                                600: "600px",
                                700: "700px",
                                800: "800px",
                                900: "900px",
                                1000: "1000px",
                                "25vw": "25vw",
                                "50vw": "50vw",
                                "75w": "75vw",
                                "100vw": "100vw",
                                "25svh": "25svh",
                                "50svh": "50svh",
                                "75svh": "75svh",
                                "100svh": "100svh",
                                "25lvh": "25lvh",
                                "50lvh": "50lvh",
                                "75lvh": "75lvh",
                                "100lvh": "100lvh",
                                "25dvh": "25dvh",
                                "50dvh": "50dvh",
                                "75dvh": "75dvh",
                                "100dvh": "100dvh",
                        },
                        perspectiveOrigin: {},
                },
        }
);

export default perspective;
