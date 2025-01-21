export const sections = [
    {
        title: "Electronics",
        description : "A comprehensive guide to understanding the fundamentals of electronics, components, and advanced technologies.",
        topics: [
            {
                title: "Theory",
                articles: [
                    { title: "Current", link: "/docs/electronics/theory/current" },
                    { title: "Voltage", link: "/docs/electronics/theory/voltage" },
                    { title: "Resistance", link: "/docs/electronics/theory/resistance" },
                ],
            },
            {
                title: "Basic Electronic Circuit Components",
                articles: [
                    { title: "Resistors", link: "/docs/electronics/basic-electronic-circuit-components/resistors" },
                    { title: "Capacitors", link: "/docs/electronics/basic-electronic-circuit-components/capacitors" },
                    { title: "Inductors", link: "/docs/electronics/basic-electronic-circuit-components/inductors" },
                    { title: "Transformers", link: "/docs/electronics/basic-electronic-circuit-components/transformers" },
                ],
            },
            {
                title: "Semiconductors",
                articles: [
                    { title: "Semiconductor Technology", link: "/docs/electronics/semiconductors/semiconductor-technology" },
                ],
            },
            {
                title: "Optoelectronics",
                articles: [
                    { title: "A Lecture on Photons", link: "/docs/electronics/optoelectronics/a-lecture-of-photons" },
                ],
            },
            {
                title: "Sensors",
                articles: [
                    { title: "General Principals", link: "/docs/electronics/sensors/general-principals" },
                ],
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