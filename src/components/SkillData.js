const skillData = [
    // Programming Languages
    {
        id: 1,
        name: "Java",
        category: "Programming Languages",
        importance: "high",
        imgSrc: "/skills/java.jpg",
        description: () => (
            <>
                <p>
                    Extensive experience with Java development across various applications and systems.
                    Proficient in core Java concepts including OOP principles, data structures, multithreading,
                    and design patterns.
                </p>
                <p>
                    Built several applications leveraging Java's robust libraries and frameworks, focusing on
                    performance optimization and clean code architecture.
                </p>
            </>
        ),
    },
    {
        id: 2,
        name: "JavaScript",
        category: "Programming Languages",
        importance: "high",
        imgSrc: "/skills/javascript.jpg",
        description: () => (
            <>
                <p>
                    Strong proficiency in JavaScript for both front-end and back-end development.
                    Experienced with ES6+ features, asynchronous programming, and functional concepts.
                </p>
                <p>
                    Developed interactive web applications and utilized JavaScript frameworks like React
                    to create responsive user interfaces with efficient state management.
                </p>
            </>
        ),
        relatedProjects: [
            {
                label: "SHELTER Game (React Native / Expo)",
                skillId: 10
            }
        ]
    },
    {
        id: 3,
        name: "Python",
        category: "Programming Languages",
        importance: "high",
        imgSrc: "/skills/python.jpg",
        description: () => (
            <>
                <p>
                    Advanced Python programming skills applied to data analysis, machine learning, and
                    algorithm development. Proficient with scientific libraries including NumPy, Pandas,
                    and Matplotlib.
                </p>
                <p>
                    Implemented machine learning models using scikit-learn and PyTorch, with a focus on
                    optimization algorithms and computational geometry applications.
                </p>
            </>
        ),
    },
    {
        id: 4,
        name: "C++",
        category: "Programming Languages",
        importance: "medium",
        imgSrc: "/skills/cpp.jpg",
        description: () => (
            <>
                <p>
                    Working knowledge of C++ for performance-critical applications and algorithm implementation.
                    Experience with STL, memory management, and object-oriented design in C++ environments.
                </p>
                <p>
                    Applied C++ in computational geometry projects and optimization problems requiring
                    high-performance computing solutions.
                </p>
            </>
        ),
    },

    {
        id: 5,
        name: "MATLAB",
        category: "Programming Languages",
        importance: "medium",
        description: () => (
            <>
                <div className="matlab">
                    <div className="matlab-project-image-container">
                        <a
                            href="/papers/Runge_Kutta_Method.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >

                            <img
                                src="/papers/rungekutta.jpg"
                                alt="Runge-Kutta Method"
                                className="project-image"
                            />
                            <div className="image-overlay">Runge-Kutta Method</div>
                        </a>
                    </div>
                    <div className="matlab-text">
                        <p>
                            Extensive experience with MATLAB, particularly in the context of linear algebra and ordinary differential equations (ODEs).
                            Familiar with solving large systems of linear equations, performing LU and QR decompositions, computing eigenvalues and eigenvectors,
                            and analyzing the stability of matrices. In ODEs, experience includes both analytical and numerical approaches,
                            such as implementing Euler’s method, Runge-Kutta methods, and phase plane analysis.
                        </p>
                        <p>
                            Additionally skilled in using MATLAB for data visualization, simulation of mathematical models, and algorithm prototyping 
                            for mathematical analysis and engineering problems.
                        </p>
                        <p>
                            <strong>Selected project:</strong> Authored a report providing an overview of the classical fourth-order Runge-Kutta method
                            for solving initial value problems in ODEs. Implemented the method in MATLAB, validated the results with known
                            analytical solutions, and visualized error behavior across varying step sizes. The project emphasized both
                            theoretical foundations and practical implementation.
                        </p>
                    </div>
                </div>
            </>
        ),
    },

    // Frameworks & Libraries
    {
        id: 6,
        name: "React",
        category: "Frameworks & Libraries",
        importance: "high",
        imgSrc: "/skills/react.jpg",
        description: () => (
            <>
                <p>
                    Expertise in building modern web applications with React, including component architecture,
                    hooks, context API, and state management solutions.
                </p>
                <p>
                    Developed responsive and interactive user interfaces with a focus on reusable components
                    and efficient rendering patterns.
                </p>
            </>
        ),
    },
    {
        id: 7,
        name: "Next.js",
        category: "Frameworks & Libraries",
        importance: "medium",
        imgSrc: "/skills/nextjs.jpg",
        description: () => (
            <>
                <p>
                    Experience with Next.js for server-side rendering and creating optimized React applications.
                    Implemented routing, API routes, and static site generation features.
                </p>
                <p>
                    Built performance-focused web applications leveraging Next.js's hybrid rendering capabilities
                    and optimization features.
                </p>
            </>
        ),
    },
    {
        id: 8,
        name: "Node.js",
        category: "Frameworks & Libraries",
        importance: "medium",
        imgSrc: "/skills/nodejs.jpg",
        description: () => (
            <>
                <p>
                    Proficient in server-side JavaScript development using Node.js for creating APIs and
                    backend services. Experience with Express.js, middleware patterns, and database integration.
                </p>
                <p>
                    Developed RESTful APIs and implemented authentication, data validation, and error handling
                    for web applications.
                </p>
            </>
        ),
    },
    {
        id: 9,
        name: "PyTorch",
        category: "Frameworks & Libraries",
        importance: "high",
        imgSrc: "/skills/pytorch.jpg",
        description: () => (
            <>
                <p>
                    Advanced experience in deep learning model development using PyTorch. Implemented neural
                    networks for various applications including computer vision and optimization tasks.
                </p>
                <p>
                    Designed custom loss functions, training loops, and optimization strategies for specialized
                    machine learning applications.
                </p>
            </>
        ),
    },
    {
        id: 10,
        name: "TensorFlow",
        category: "Frameworks & Libraries",
        importance: "medium",
        description: () => (
            <>
                <div className="tensorflow">
                    <p>
                        Proficient in TensorFlow for building, training, and deploying neural network models with strong focus on
                        model evaluation and production readiness.
                    </p>

                    <p>
                        Applied TensorFlow to develop a neural network that predicts phishing websites based on URLs, achieving 96.61%
                        test accuracy.
                    </p>
                    <a
                        href="https://github.com/Olga-Gol/PhishingWebsitesML/blob/main/ML%20models/NeuralNetwork.ipynb"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontWeight: 'bold' }}
                    >
                        View project on GitHub
                    </a>
                </div>
            </>
        ),
    },

    {
        id: 11,
        name: "React Native/Expo",
        category: "Frameworks & Libraries",
        importance: "medium",
        videoOrientation: "vertical",
        videos: [
            "/ShelterGameplay/ShelterGameplay.MP4"
        ],
        description: () => (
            <>
                <p>
                    SHELTER is a mobile adaptation of a strategic board game where players receive a random set of cards
                    representing traits such as gender, age, and profession. The objective is to persuade others that your
                    character’s attributes enhance survival chances in a bunker scenario.
                </p>
                <p>
                    This project was my first foray into iOS app development, leveraging the React Native framework alongside
                    the Expo ecosystem. It served as a comprehensive exercise in mobile development, producing a polished and
                    engaging game experience tailored for friends and casual players.
                </p>
                <h4>Technical Skills Applied:</h4>
                <ul className="shelter">
                    <li><strong>React Native Framework:</strong> Developed a native-like user interface utilizing React’s
                        component-based architecture, ensuring responsiveness and smooth interaction on iOS devices.</li>
                    <li><strong>Expo Ecosystem:</strong> Streamlined app development with Expo’s managed workflow, simplifying
                        native code handling and focusing development on JavaScript.</li>
                    <li><strong>Responsive Design:</strong> Implemented adaptive layouts and styling for optimal display across
                        screen sizes and orientations.</li>
                    <li><strong>Navigation & UI Components:</strong> Employed React Navigation for structured app flow and
                        utilized core React Native components for consistent UI aesthetics.</li>
                </ul>
                <a
                    href="https://github.com/Olga-Gol/ShelterGame"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View project on GitHub
                </a>
            </>
        ),
    },

    // Technical Fields
    {
        id: 12,
        name: "Computational Geometry",
        category: "Technical Fields",
        importance: "high",
        videos: [
            "/videos/hilbert1.mp4",
            "/videos/hilbert2.mp4",
            "/videos/hilbert3.mp4"
        ],
        description: () => (
            <div>
                <p>
                    Conducted advanced research in computational geometry during the REU program for
                    Combinatorics, Algorithms, and AI for Real Problems at the University of Maryland,
                    College Park. Focused on theoretical problems in the Hilbert metric space, including
                    the Minimum Enclosing Ball (MEB) problem.
                </p>
                <p>
                    Proved that minimum radius balls over metric spaces with the Heine-Borel property are
                    LP-type problems, and developed geometric primitives for computing such balls in Hilbert
                    geometry. Demonstrated extension properties in weak metric spaces and contributed to a
                    dynamic visualization tool for convex polygonal domains.
                </p>
                <p>
                    Co-developed an interactive JavaScript-based application for visualizing and manipulating
                    Funk, reverse Funk, and Thompson balls in convex sets. The tool is publicly available at{" "}
                    <a
                        href="https://funk-geo-visualizer.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        funk-geo-visualizer.vercel.app
                    </a>. View the code on{" "}
                    <a
                        href="https://github.com/nithin1527/funk-geo-visualizer?tab=readme-ov-file"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>.
                </p>
            </div>
        ),
    },
    {
        id: 13,
        name: "Machine Learning",
        category: "Technical Fields",
        importance: "high",
        imgSrc: "/skills/machine-learning.jpg",
        description: () => (
            <>
                <p>
                    Comprehensive understanding of machine learning principles, algorithms, and applications.
                    Experience with supervised and unsupervised learning, model evaluation, and feature engineering.
                </p>
                <p>
                    Developed and deployed machine learning solutions for classification, regression, clustering,
                    and optimization problems across various domains.
                </p>
                <p>
                    Familiar with key algorithms including decision trees, linear regression, and neural networks.
                </p>
            </>
        ),
    },
    {
        id: 14,
        name: "Optimization",
        category: "Technical Fields",
        importance: "high",
        description: () => (
            <>
                <div className="optimization">
                    <div className="project-image-container">
                        <a
                            href="/papers/minesweeper-lp.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >

                            <img
                                src="/papers/minesweeper.png"
                                alt="Minesweeper Optimization Project"
                                className="project-image"
                            />
                            <div className="image-overlay">Minesweeper Optimization Paper</div>
                        </a>
                    </div>
                    <div className="optimization-text">
                        <p>
                            Strong background in mathematical optimization, including linear programming (LP), integer LP,
                            convex optimization, minimum-cost network flow (MCNF), metaheuristics, and constraint satisfaction problems (CSP).
                        </p>
                        <p>
                            Experienced in applying optimization techniques to complex problems in resource allocation, scheduling, and
                            improving algorithm efficiency.
                        </p>

                        <p>
                            <strong>Selected project:</strong> Developed an LP-based model for the Minesweeper game that formulates
                            game constraints as linear equations to identify safe moves. The model adapts existing approaches and
                            demonstrates practical application on a 5x5 board.
                        </p>
                    </div>
                </div>
            </>
        ),
    },
    {
        id: 15,
        name: "Algorithms",
        category: "Technical Fields",
        importance: "high",
        imgSrc: "/skills/algorithms.jpg",
        description: () => (
            <>
                <p>
                    Advanced knowledge of algorithmic design, analysis, and implementation. Expertise in data
                    structures, complexity analysis, and algorithm optimization.
                </p>
                <p>
                    Implemented efficient solutions for complex computational problems, with a focus on
                    time and space complexity optimization.
                </p>
            </>
        ),
    },

    // Additional Skills
    {
        id: 16,
        name: "Publications",
        category: "Additional Skills",
        importance: "medium",
        description: () => (
            <>
                <div className="publications-grid">
                    <div className="publication-image-container">
                        <a
                            href="https://arxiv.org/abs/2503.01988"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="publication-image-link"
                        >
                            <img
                                src="/papers/software.jpg"
                                alt="Software for the Thompson and Funk Polygonal Geometry"
                                className="publication-image"
                            />
                            <div className="publication-overlay">
                                <div className="overlay-title">
                                    Software for the Thompson and Funk Polygonal Geometry
                                </div>
                                <div className="overlay-description">
                                    Accepted for presentation at SoCG 2025, a Rank A conference. Interactive tools for Funk,
                                    Thompson, and Hilbert geometries in convex polygons.
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="publication-image-container">
                        <a
                            href="https://arxiv.org/abs/2412.17138"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="publication-image-link"
                        >
                            <img
                                src="/papers/balls.jpg"
                                alt="On The Heine-Borel Property and Minimum Enclosing Balls"
                                className="publication-image"
                            />
                            <div className="publication-overlay">
                                <div className="overlay-title">
                                    On The Heine-Borel Property and Minimum Enclosing Balls
                                </div>
                                <div className="overlay-description">
                                    Preprint. LP-type structures in minimum-radius ball problems for Hilbert, Thompson,
                                    and Funk metrics.
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </>
        ),
    },
    {
        id: 17,
        name: "Web Development",
        category: "Additional Skills",
        importance: "medium",
        imgSrc: "/skills/web-development.jpg",
        description: () => (
            <>
                <p>
                    Full-stack web development skills covering front-end design, back-end implementation,
                    and database integration. Experience with responsive design, accessibility, and modern
                    web technologies.
                </p>
                <p>
                    Built interactive web applications using React, Next.js, and Node.js with a focus on
                    performance optimization and user experience.
                </p>
            </>
        ),
    },
    {
        id: 18,
        name: "Mobile Development",
        category: "Additional Skills",
        importance: "small",
        imgSrc: "/skills/mobile-development.jpg",
        description: () => (
            <>
                <p>
                    Experience in mobile application development using React Native and Expo. Created
                    cross-platform mobile experiences with native-like performance and UI.
                </p>
                <p>
                    Developed the SHELTER game as a mobile application, implementing game logic, user
                    interface, and interactive elements for iOS.
                </p>
            </>
        ),
    },
    {
        id: 19,
        name: "Data Analysis",
        category: "Additional Skills",
        importance: "medium",
        imgSrc: "/skills/data-analysis.jpg",
        description: () => (
            <>
                <p>
                    Strong data analysis capabilities using Python and specialized libraries. Experience
                    with data cleaning, exploratory analysis, visualization, and statistical methods.
                </p>
                <p>
                    Applied data analysis techniques in research projects and practical applications,
                    extracting meaningful insights and patterns from complex datasets.
                </p>
            </>
        ),
    }
];

export default skillData;