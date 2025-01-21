export const sections = [
    {
        title: "Electronics",
        description : "A comprehensive guide to understanding the fundamentals of electronics, components, and advanced technologies.",
        topics: [
            {
                title: "Theory",
                description: "Learn the foundational concepts like current, voltage, and resistance.",
                articles: [
                    { title: "Electric Current", link: "/docs/electronics/theory/electric-current" },
                    { title: "Voltage", link: "/docs/electronics/theory/voltage" },
                    { title: "A Microscopic View of Conduction", link: "/docs/electronics/theory/a-microscopic-view-of-conduction" },
                    { title: "Resistance, Resistivity, Conductivity", link: "/docs/electronics/theory/resistance-resistivity-conductivity" },
                    { title: "Insulators, Conductors, and Semiconductors", link: "/docs/electronics/theory/insulators-conductors-and-semiconductors" },
                    { title: "Heat and Power", link: "/docs/electronics/theory/heat-and-power" },
                    { title: "Thermal Heat Conduction and Thermal Resistance", link: "/docs/electronics/theory/thermal-heat-conduction-and-thermal-resistance" },
                    { title: "Wire Gauges", link: "/docs/electronics/theory/wire-gauges" },
                    { title: "Grounds", link: "/docs/electronics/theory/grounds" },
                    { title: "Electric Circuits", link: "/docs/electronics/theory/electric-circuits" },
                    { title: "Ohm's Law and Resistors", link: "/docs/electronics/theory/ohms-law-and-resistors" },
                    { title: "Voltage and Current Sources", link: "/docs/electronics/theory/voltage-and-current-sources" },
                    { title: "Measuring Voltage, Current, and Resistance", link: "/docs/electronics/theory/measuring-voltage-current-and-resistance" },
                    { title: "Combining Batteries", link: "/docs/electronics/theory/combining-batteries" },
                    { title: "Open and Short Circuits", link: "/docs/electronics/theory/open-and-short-circuits" },
                    { title: "Kirchhoff's Laws", link: "/docs/electronics/theory/kirchhoffs-laws" },
                    { title: "Superposition Theorem", link: "/docs/electronics/theory/superposition-theorem" },
                    { title: "Thevenin's and Norton's Theorems", link: "/docs/electronics/theory/thevenins-and-nortons-theorems" },
                    { title: "AC Circuits", link: "/docs/electronics/theory/ac-circuits" },
                    { title: "AC and Resistors, RMS Voltage, and Current", link: "/docs/electronics/theory/ac-and-resistors-rms-voltage-and-current" },
                    { title: "Main Powers", link: "/docs/electronics/theory/main-powers" },
                    { title: "Capacitors", link: "/docs/electronics/theory/capacitors" },
                    { title: "Inductors", link: "/docs/electronics/theory/inductors" },
                    { title: "Modeling Complex Circuits", link: "/docs/electronics/theory/modeling-complex-circuits" },
                ],
            },
            {
                title: "Basic Electronic Circuit Components",
                description: "Explore the essential components of circuits like resistors, capacitors, and inductors.",
                articles: [
                    { title: "Resistors", link: "/docs/electronics/basic-electronic-circuit-components/resistors" },
                    { title: "Capacitors", link: "/docs/electronics/basic-electronic-circuit-components/capacitors" },
                    { title: "Inductors", link: "/docs/electronics/basic-electronic-circuit-components/inductors" },
                    { title: "Transformers", link: "/docs/electronics/basic-electronic-circuit-components/transformers" },
                ],
            },
            {
                title: "Semiconductors",
                description: "Understand semiconductor technology and its applications in modern electronics.",
                articles: [
                    { title: "Semiconductor Technology", link: "/docs/electronics/semiconductors/semiconductor-technology" },
                ],
            },
            {
                title: "Optoelectronics",
                description: "Dive into the world of light-based electronics and photon technology.",
                articles: [
                    { title: "A Lecture on Photons", link: "/docs/electronics/optoelectronics/a-lecture-of-photons" },
                ],
            },
            {
                title: "Sensors",
                description: "Learn about sensors and their principles for detecting physical phenomena.",
                articles: [
                    { title: "General Principals", link: "/docs/electronics/sensors/general-principals" },
                ],
            },
            {
                title: "Hands-On Electronics",
                description: "Practical exercises and projects to apply your electronics knowledge.",
                articles: [],
            },
            {
                title: "Operational Amplifiers",
                description: "Explore the design and applications of operational amplifiers in circuits.",
                articles: [],
            },
            {
                title: "Filters",
                description: "Understand the role of filters in shaping signal frequencies in electronics.",
                articles: [],
            },
            {
                title: "Oscillators and Timers",
                description: "Study how oscillators and timers are used to generate and control signals.",
                articles: [],
            },
            {
                title: "Voltage Regulators and Power Supplies",
                description: "Learn how to manage and regulate power in electronic circuits.",
                articles: [],
            },
            {
                title: "Digital Electronics",
                description: "An introduction to the world of digital logic and binary systems.",
                articles: [],
            },
            {
                title: "Microcontrollers",
                description: "Discover microcontrollers and their role in embedded systems.",
                articles: [],
            },
            {
                title: "Programmable Logic",
                description: "Learn about programmable logic devices and their applications.",
                articles: [],
            },
            {
                title: "Motors",
                description: "Understand the types and operation of motors in electronic systems.",
                articles: [],
            },
            {
                title: "Audio Electronics",
                description: "Explore the design and function of audio equipment and systems.",
                articles: [],
            },
            {
                title: "Modular Electronics",
                description: "Learn how modular electronics simplify circuit design and assembly.",
                articles: [],
            },
        ],
    },
    {
        title: "Kubernetes",
        description : "An overview of Kubernetes architecture, installation, and management for container orchestration.",
        topics: [
            {
                title: "Architecture",
                articles: [
                    { title: "Components", link: "/docs/kubernetes/architecture/components" },
                ],
            },
            {
                title: "Installation",
                articles: [
                    { title: "Cluster Provisioning", link: "/docs/kubernetes/installation/cluster-provisioning" },
                ],
            },
            {
                title: "Networking",
                articles: [
                    { title: "CNI Driver", link: "/docs/kubernetes/networking/cni-driver" },
                ],
            },
            {
                title: "Storage",
                articles: [
                    { title: "CSI Driver", link: "/docs/kubernetes/storage/csi-driver" },
                ],
            },
        ],
    },
    {
        title: "Linux",
        description : "A detailed exploration of the Linux operating system, including kernel, networking, and storage concepts.",
        topics: [
            {
                title: "Overview",
                articles: [
                    { title: "Components", link: "/docs/linux/overview/components" },
                ],
            },
            {
                title: "Kernel",
                articles: [
                    { title: "Kernel Parameters", link: "/docs/linux/kernel/kernel-parameters" },
                ],
            },
            {
                title: "Networking",
                articles: [
                    { title: "Netfilter", link: "/docs/linux/networking/netfilter" },
                ],
            },
            {
                title: "Storage",
                articles: [
                    { title: "Filesystems", link: "/docs/linux/storage/filesystems" },
                ],
            },
        ],
    },
    {
        title: "DevOps",
        description : "A practical guide to DevOps tools and practices, including containers, automation, monitoring, and logging.",
        topics: [
            {
                title: "Containers",
                articles: [
                    { title: "Docker", link: "/docs/devops/containers/docker" },
                ],
            },
            {
                title: "Monitoring",
                articles: [
                    { title: "Grafana", link: "/docs/devops/monitoring/grafana" },
                ],
            },
            {
                title: "Automation",
                articles: [
                    { title: "Jenkins", link: "/docs/devops/automation/jenkins" },
                ],
            },
            {
                title: "Logging",
                articles: [
                    { title: "Elastic Stack", link: "/docs/devops/logging/elastic-stack" },
                ],
            },
        ],
    },
];