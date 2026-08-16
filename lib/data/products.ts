import { ProductDetail } from "../types";
export const PRODUCTS_DATA: ProductDetail[] = [
  // --- HARDWARE SECTION (6 Products) ---
  {
    id: "basic-magnetic-gps",
    category: "Hardware",
    title: "Basic GPS / Magnetic GPS Tracker",
    shortDesc:
      "Compact and reliable GPS tracking hardware designed for flexible installation, asset monitoring, and basic vehicle tracking requirements.",

    longDesc:
      "The Basic GPS / Magnetic GPS Tracker is a compact and versatile tracking solution designed for applications where easy installation, portability, and reliable location monitoring are essential. Its magnetic mounting design allows for quick and flexible installation without complex wiring, making it suitable for vehicles, mobile assets, equipment, and other valuable assets. With reliable GPS-based location tracking and a compact form factor, it provides a practical solution for basic tracking and monitoring requirements.",

    // Keep the same working image link
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000",

    // Keep the same working GIF link
    gifUrl: "/media/gps-tracking-demo.gif",

    // Keep the same working video link
    videoUrl: "/media/realtime-tracking.mp4",

    // Keep the same working gallery links
    gallery: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80&w=1000",
    ],

    features: [
      "GPS-based real-time location tracking",
      "Compact and portable design for flexible deployment",
      "Magnetic mounting for quick and convenient installation",
      "Suitable for vehicle and asset tracking applications",
      "Reliable location monitoring with low-maintenance operation",
      "Ideal for temporary or permanent tracking requirements",
    ],

    specifications: {
      "Tracking Technology": "GPS / GSM",
      "Installation Type": "Magnetic / Portable Mounting",
      Application: "Vehicle and Asset Tracking",
      "Tracking Mode": "Real-Time Location Monitoring",
      Design: "Compact and Portable",
    },

    applications: [
      "Vehicle Tracking",
      "Fleet Monitoring",
      "Asset Tracking",
      "Equipment Monitoring",
      "Rental Vehicle Monitoring",
      "Mobile Asset Security",
    ],
  },

  {
    id: "ais140-gps-hardware",
    category: "Hardware",
    title: "AIS140 GPS Hardware",
    shortDesc:
      "Reliable AIS-140 compliant GPS tracking hardware designed for real-time vehicle tracking, safety monitoring, and regulatory compliance.",

    longDesc:
      "The AIS140 GPS Hardware is a reliable vehicle tracking solution designed to support real-time location monitoring, safety management, and regulatory compliance requirements. Built for professional fleet and commercial vehicle operations, it provides accurate GPS positioning, continuous tracking, and essential vehicle monitoring capabilities. The hardware is suitable for organizations that require dependable fleet visibility, operational control, and compliance-focused vehicle tracking.",

    // Same working image link
    image:
      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=1000",

    // Same working GIF link
    gifUrl: "/media/gps-tracker-anim.gif",

    // Same working video link
    videoUrl: "/media/track-everything.mp4",

    // Same working gallery links
    gallery: [
      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1590650213165-c1fef80648c4?auto=format&fit=crop&q=80&w=1000",
    ],

    features: [
      "AIS-140 compliant GPS tracking solution",
      "Real-time vehicle location tracking",
      "Accurate GPS positioning and continuous monitoring",
      "Supports fleet and commercial vehicle tracking operations",
      "Vehicle movement and route monitoring",
      "Designed for safety, visibility, and regulatory compliance",
    ],

    specifications: {
      Compliance: "AIS-140",
      "Tracking Technology": "GPS / GSM",
      "Tracking Mode": "Real-Time Location Monitoring",
      Application: "Commercial Vehicle and Fleet Tracking",
      Positioning: "High-Accuracy GPS",
    },

    applications: [
      "Public Transport Vehicles",
      "Commercial Vehicle Fleets",
      "School Bus Tracking",
      "Logistics and Transportation",
      "Passenger Transport Services",
    ],
  },

  {
    id: "video-telematics-solutions",
    category: "Hardware",
    title: "Video Telematics Solutions",

    shortDesc:
      "Advanced video telematics solutions combining live video, GPS tracking, and intelligent vehicle monitoring for enhanced fleet safety and operational visibility.",

    longDesc:
      "Our Video Telematics Solutions combine GPS-based vehicle tracking with real-time video monitoring to provide organizations with complete visibility into fleet operations. The solution enables businesses to monitor vehicles, driving behavior, road conditions, and critical events while maintaining access to valuable video evidence. By integrating location data with video intelligence, organizations can improve driver safety, enhance fleet security, optimize operations, and make informed decisions based on real-time insights.",

    // Relevant vehicle / telematics image
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200",

    // Make sure this file exists at: public/media/gps-tracker-anim.gif
    gifUrl: "/media/gps-tracker-anim.gif",

    // Make sure this file exists at: public/media/Video-Telematics.mp4
    videoUrl: "/media/VideoTelematics.mp4",

    gallery: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1551830820-330a71b99659?auto=format&fit=crop&q=80&w=1200",
    ],

    features: [
      "Real-time GPS vehicle tracking with live video monitoring",
      "Video recording for incident investigation and evidence",
      "Driver behavior and road safety monitoring",
      "Live vehicle location and journey tracking",
      "Intelligent event-based video monitoring",
      "Improved fleet security and operational visibility",
      "Integrated GPS and video data for better fleet intelligence",
    ],

    specifications: {
      Technology: "GPS / Video Telematics",
      Tracking: "Real-Time GPS Location Monitoring",
      Video: "Live and Event-Based Video Monitoring",
      Connectivity: "Cellular Network Connectivity",
      Monitoring: "Vehicle, Driver and Road Activity",
      Application: "Fleet and Vehicle Monitoring",
    },

    applications: [
      "Fleet Management",
      "Logistics and Transportation",
      "Public Transport",
      "Commercial Vehicle Operations",
      "Driver Safety Monitoring",
      "Fleet Security and Incident Management",
    ],
  },

  {
    id: "personal-pet-wallet-tracker",
    category: "Hardware",
    title: "Personal / Pet / Wallet Tracker",

    shortDesc:
      "Compact GPS tracking solution designed to help monitor personal belongings, pets, and valuable items with reliable location tracking and easy portability.",

    longDesc:
      "The Personal / Pet / Wallet Tracker is a compact and versatile GPS tracking solution designed to provide peace of mind by helping users monitor their valuable belongings, pets, and personal items. Its lightweight and portable design makes it suitable for everyday use, while GPS-based location tracking helps users keep track of important assets and receive location updates when needed. The solution is ideal for personal security, pet monitoring, travel, and protection of valuable belongings.",

    // Relevant image
    image:
      "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=1200",

    // Make sure this file exists in public/media/
    gifUrl: "/media/gps-tracker-anim.gif",

    // Make sure this file exists in public/media/
    videoUrl: "/media/track-everything.mp4",

    gallery: [
      "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=1200",
    ],

    features: [
      "Compact and portable GPS tracking design",
      "Real-time location tracking for personal belongings and pets",
      "Easy to carry or attach to bags, wallets, collars, and other items",
      "Location monitoring for improved personal security",
      "Helps locate misplaced or lost valuable belongings",
      "Suitable for everyday personal and asset tracking requirements",
    ],

    specifications: {
      "Tracking Technology": "GPS / GSM",
      "Tracking Mode": "Real-Time Location Monitoring",
      Design: "Compact and Portable",
      Installation: "Portable / Easy Attachment",
      Application: "Personal, Pet and Asset Tracking",
    },

    applications: [
      "Pet Tracking",
      "Wallet and Personal Belongings",
      "Bags and Luggage",
      "Keys and Valuable Items",
      "Personal Asset Tracking",
      "Travel and Outdoor Equipment",
    ],
  },

  {
    id: "fatigue-sensor-solutions",
    category: "Hardware",
    title: "Fatigue Sensor & Solutions",

    shortDesc:
      "AI-powered driver fatigue monitoring solution designed to detect drowsiness, distraction, and unsafe driving behavior in real time.",

    longDesc:
      "Our Fatigue Sensor & Solutions leverage advanced AI vision technology to continuously monitor driver alertness and behavior. The system detects fatigue, drowsiness, distraction, mobile phone usage, smoking, and other unsafe driving activities, generating instant alerts to help prevent accidents. Designed for commercial fleets, public transportation, mining, logistics, and industrial operations, it enhances driver safety, improves compliance, and supports efficient fleet management through real-time monitoring and intelligent analytics.",

    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200",

    gifUrl: "/media/gps-tracker-anim.gif",

    videoUrl: "/media/track-everything.mp4",

    gallery: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1200",
    ],

    features: [
      "AI-powered driver fatigue detection",
      "Real-time drowsiness and distraction monitoring",
      "Detects mobile phone usage while driving",
      "Smoking and seatbelt violation detection",
      "Instant audio and visual driver alerts",
      "Cloud-based monitoring and event reporting",
      "Improves fleet safety and operational compliance",
    ],

    specifications: {
      Technology: "AI Vision & Driver Monitoring System",
      Detection: "Fatigue, Drowsiness & Driver Distraction",
      Connectivity: "4G / Wi-Fi (Model Dependent)",
      Alerts: "Real-Time Audio & Visual Alerts",
      Application: "Commercial Vehicles & Fleet Safety",
    },

    applications: [
      "Commercial Fleet Management",
      "Public Transportation",
      "Mining & Construction Vehicles",
      "Logistics & Supply Chain",
      "School & Staff Buses",
      "Long-Haul Transportation",
    ],
  },

  {
    id: "gps-dash-camera",
    category: "Hardware",
    title: "GPS Based Dash Camera",
    shortDesc:
      "Advanced GPS-enabled dash camera designed for real-time vehicle monitoring, video recording, driver safety, and fleet security.",

    longDesc:
      "The GPS Based Dash Camera combines high-quality video recording with GPS-based vehicle tracking to provide enhanced visibility and security for vehicles and fleets. It enables organizations to monitor vehicle journeys, record road activity, track locations, and improve driver safety. The solution is ideal for fleet operators and businesses seeking reliable video evidence, real-time monitoring, and improved control over vehicle operations.",

    // Same working image link
    image:
      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=1000",

    // Same working GIF link
    gifUrl: "/media/gps-tracker-anim.gif",

    // Same working video link
    videoUrl: "/media/track-everything.mp4",

    // Same working gallery links
    gallery: [
      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1590650213165-c1fef80648c4?auto=format&fit=crop&q=80&w=1000",
    ],

    features: [
      "GPS-based real-time vehicle location tracking",
      "High-quality video recording for road and vehicle monitoring",
      "Records driving activity for improved safety and accountability",
      "Supports journey tracking and route history",
      "Provides video evidence in case of accidents or incidents",
      "Helps fleet operators monitor vehicles and driver behavior",
    ],

    specifications: {
      "Tracking Technology": "GPS / GSM",
      "Camera Type": "Vehicle Dash Camera",
      "Tracking Mode": "Real-Time Location Monitoring",
      "Video Recording": "Continuous / Event-Based Recording",
      Application: "Vehicle and Fleet Monitoring",
    },

    applications: [
      "Commercial Vehicle Fleets",
      "Logistics and Transportation",
      "Public Transport Vehicles",
      "Corporate Vehicle Fleets",
      "School and Staff Transportation",
      "Driver Safety Monitoring",
    ],
  },

  {
    id: "gps-digital-lock-valuable-transport",
    category: "Hardware",
    title: "GPS Based Digital Lock for Valuable Transport",

    shortDesc:
      "Smart GPS-enabled digital locking solution designed to secure high-value cargo and monitor valuable transportation in real time.",

    longDesc:
      "The GPS Based Digital Lock for Valuable Transport is an advanced security solution designed to protect high-value goods during transportation. By combining GPS tracking with intelligent digital locking technology, the system enables organizations to monitor cargo location, secure transport vehicles, and receive alerts for unauthorized access or tampering. It provides enhanced visibility and control throughout the transportation journey, helping businesses improve cargo security, reduce theft risks, and ensure safe and accountable delivery of valuable goods.",

    image:
      "https://images.unsplash.com/photo-1565610222536-ef125c59da2e?auto=format&fit=crop&q=80&w=1200",

    gifUrl: "/media/gps-tracker-anim.gif",

    videoUrl: "/media/track-everything.mp4",

    gallery: [
      "https://images.unsplash.com/photo-1565610222536-ef125c59da2e?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&q=80&w=1200",
    ],

    features: [
      "Real-time GPS tracking of valuable transport vehicles",
      "Digital locking mechanism for enhanced cargo security",
      "Unauthorized access and tampering alerts",
      "Remote monitoring of lock and vehicle status",
      "Location-based security monitoring throughout the journey",
      "Helps reduce theft and unauthorized cargo access",
      "Improves accountability and visibility in valuable transportation",
    ],

    specifications: {
      Technology: "GPS / Digital Locking System",
      Tracking: "Real-Time GPS Location Monitoring",
      Security: "Electronic Lock & Tamper Detection",
      Connectivity: "GSM / Cellular Network",
      Monitoring: "Remote Lock and Vehicle Status Monitoring",
      Application: "High-Value Cargo and Valuable Transport",
    },

    applications: [
      "High-Value Cargo Transportation",
      "Cash and Valuable Goods Transport",
      "Pharmaceutical Logistics",
      "Jewellery and Precious Goods Transport",
      "Secure Supply Chain Operations",
      "Logistics and Fleet Security",
    ],
  },

  {
    id: "iot-hardware-ev-vehicles-batteries",
    category: "Hardware",
    title: "IoT Hardware for EV Vehicles & Batteries",

    shortDesc:
      "Smart IoT hardware solutions designed for real-time monitoring, tracking, and intelligent management of electric vehicles and EV batteries.",

    longDesc:
      "Our IoT Hardware for EV Vehicles & Batteries enables intelligent monitoring and connected management of electric mobility assets. These solutions combine IoT connectivity, GPS tracking, and battery monitoring capabilities to provide real-time visibility into EV vehicles and battery performance. Designed for EV manufacturers, fleet operators, battery service providers, and mobility businesses, the hardware helps monitor vehicle location, battery status, usage patterns, and operational performance while supporting efficient fleet management and predictive maintenance.",

    image:
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=1200",

    gifUrl: "/media/gps-tracker-anim.gif",

    videoUrl: "/media/track-everything.mp4",

    gallery: [
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1551830820-330a71b99659?auto=format&fit=crop&q=80&w=1200",
    ],

    features: [
      "Real-time GPS tracking for electric vehicles",
      "IoT-enabled remote monitoring and data connectivity",
      "Battery status and performance monitoring",
      "Real-time vehicle and battery data collection",
      "Supports fleet management and operational analytics",
      "Helps identify battery performance trends and maintenance requirements",
      "Designed for connected EV and battery management applications",
    ],

    specifications: {
      Technology: "IoT / GPS / Battery Monitoring",
      Connectivity: "4G / GSM / IoT Connectivity",
      Monitoring: "Vehicle and Battery Performance",
      Tracking: "Real-Time GPS Location Monitoring",
      Application: "Electric Vehicles and EV Batteries",
    },

    applications: [
      "Electric Vehicle Fleets",
      "EV Battery Monitoring",
      "Battery Swapping Networks",
      "Electric Mobility Services",
      "EV Manufacturers and OEMs",
      "Fleet and Mobility Management",
    ],
  },

  {
    id: "cctv-dash-cams-security-surveillance",
    category: "Hardware",
    title: "CCTV & Dash Cams Security & Surveillance Systems",

    shortDesc:
      "Advanced CCTV and dash camera solutions designed to enhance security, monitor activities, and provide reliable video surveillance for vehicles, businesses, and critical environments.",

    longDesc:
      "Our CCTV & Dash Cams Security & Surveillance Systems provide reliable video monitoring and recording solutions for a wide range of security and operational requirements. From fixed CCTV installations to vehicle-mounted dash cameras, our solutions help organizations monitor critical areas, improve security, record important events, and maintain valuable video evidence. These systems are designed to support businesses, fleets, logistics operations, commercial vehicles, and other environments where continuous monitoring and enhanced security are essential.",

    image:
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=1200",

    gifUrl: "/media/gps-tracker-anim.gif",

    videoUrl: "/media/track-everything.mp4",

    gallery: [
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=1200",
    ],

    features: [
      "High-quality video surveillance and recording",
      "CCTV solutions for indoor and outdoor security monitoring",
      "Vehicle-mounted dash cameras for road and fleet monitoring",
      "Continuous and event-based video recording",
      "Helps capture valuable video evidence during incidents",
      "Supports enhanced security and operational visibility",
      "Suitable for commercial, industrial, and fleet applications",
    ],

    specifications: {
      Technology: "CCTV / Dash Camera Surveillance",
      Video: "High-Quality Digital Video Recording",
      Monitoring: "Real-Time and Recorded Video Monitoring",
      Installation: "Fixed / Vehicle-Mounted",
      Application: "Security, Surveillance and Fleet Monitoring",
    },

    applications: [
      "Commercial and Corporate Security",
      "Industrial and Warehouse Surveillance",
      "Fleet and Vehicle Monitoring",
      "Logistics and Transportation",
      "Retail and Business Premises",
      "Public and Critical Infrastructure",
    ],
  },

  {
    id: "cable-wire-security-seal-logistics",
    category: "Hardware",
    title: "Cable Wire Security Seal for Logistics",

    shortDesc:
      "Reliable tamper-evident cable wire security seals designed to protect cargo, containers, vehicles, and logistics assets against unauthorized access.",

    longDesc:
      "The Cable Wire Security Seal for Logistics is a durable tamper-evident security solution designed to help protect valuable cargo and logistics assets during transportation and storage. The seal provides a visible indication of unauthorized access or tampering and is suitable for securing containers, trucks, trailers, doors, warehouses, and other critical access points. Its practical design supports easy identification, improved accountability, and enhanced security throughout the logistics and supply chain process.",

    image:
      "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&q=80&w=1200",

    gifUrl: "/media/gps-tracker-anim.gif",

    videoUrl: "/media/track-everything.mp4",

    gallery: [
      "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1565610222536-ef125c59da2e?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&q=80&w=1200",
    ],

    features: [
      "Tamper-evident security design",
      "Durable cable wire construction for logistics applications",
      "Helps identify unauthorized access and tampering",
      "Suitable for securing containers, trucks, trailers, and cargo",
      "Supports improved cargo accountability and supply chain security",
      "Easy identification and verification during transportation",
      "Ideal for one-time security and asset protection applications",
    ],

    specifications: {
      "Product Type": "Tamper-Evident Cable Wire Security Seal",
      Application: "Logistics and Cargo Security",
      Installation: "Manual Cable Locking",
      Security: "Tamper Evident",
      Usage: "Single-Use Security Application",
    },

    applications: [
      "Cargo and Container Security",
      "Truck and Trailer Security",
      "Logistics and Supply Chain",
      "Warehouse and Storage Security",
      "Transportation and Distribution",
      "High-Value Goods Protection",
    ],
  },

  {
    id: "container-seal-logistics-transportation",
    category: "Hardware",
    title: "Container Seal for Logistics & Transportation",

    shortDesc:
      "High-security container seals designed to protect cargo, prevent unauthorized access, and ensure shipment integrity across logistics and transportation operations.",

    longDesc:
      "Our Container Seal for Logistics & Transportation solutions provide reliable security for containers, trucks, trailers, and cargo shipments throughout the supply chain. Designed to help prevent unauthorized access, tampering, and theft, these seals provide a simple and effective way to verify the integrity of shipments during transportation and storage. With unique identification markings and tamper-evident designs, container seals support secure logistics operations, improve cargo accountability, and help organizations maintain greater control over their supply chain.",

    image:
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80&w=1200",

    gifUrl: "/media/container-seal-anim.gif",

    videoUrl: "/media/container-seal.mp4",

    gallery: [
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&q=80&w=1200",
    ],

    features: [
      "Tamper-evident design for enhanced cargo security",
      "Helps prevent unauthorized access to containers and shipments",
      "Unique serial numbers for easy identification and tracking",
      "Suitable for containers, trucks, trailers, and cargo shipments",
      "Supports shipment integrity throughout the transportation process",
      "Durable construction suitable for logistics and supply chain operations",
      "Easy to apply and verify during dispatch and delivery",
      "Helps improve cargo accountability and operational security",
    ],

    specifications: {
      "Product Type": "Container Security Seal",
      Security: "Tamper-Evident / High-Security",
      Identification: "Unique Serial Number / Identification Marking",
      Application: "Containers, Trucks, Trailers and Cargo",
      Usage: "Logistics, Transportation and Supply Chain Security",
    },

    applications: [
      "Logistics and Transportation",
      "Shipping and Cargo Operations",
      "Container Security",
      "Warehousing and Distribution",
      "Fleet and Supply Chain Management",
      "Ports and Freight Terminals",
      "Industrial and Commercial Shipments",
    ],
  },

  {
    id: "smart-id-cards",
    category: "Hardware",
    title: "Smart ID Cards",
    shortDesc:
      "Multi-functional smart RFID cards with long-range tracking for schools and corporate offices.",
    longDesc:
      "Empower your corporate office or campus with our next-generation Smart ID Cards. Seamlessly blending RFID entry credentials and high-precision long-range tracking beacons.",
    image:
      "https://images.unsplash.com/photo-1590650213165-c1fef80648c4?auto=format&fit=crop&q=80&w=1000",
    gifUrl: "/media/smarter-logistics.gif",
    videoUrl: "/media/circuit-board.mp4",
    gallery: [
      "https://images.unsplash.com/photo-1590650213165-c1fef80648c4?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1000",
    ],
    features: [
      "Dual frequency: HF/LF RFID and BLE",
      "Hands-free attendance recording",
      "Integrated emergency SOS buzzer",
      "Ultra-thin standard ID card size",
      "Battery life up to 2 years",
    ],
    specifications: {
      "RFID Standard": "Mifare 13.56MHz & EM 125KHz",
      "Active Range": "Up to 80 meters",
      "Battery Type": "CR2016 equivalent",
      Material: "Premium flexible PVC",
      Thickness: "1.2mm",
    },
    applications: [
      "Corporate Office Security",
      "University Attendance",
      "High-security Research Labs",
      "Event Visitor Flow Tracking",
    ],
  },
  {
    id: "pet-tracking-gps",
    category: "Hardware",
    title: "Pet Tracking collar GPS",
    shortDesc:
      "Featherlight, waterproof GPS collar with smart virtual fence controls to protect your pets.",
    longDesc:
      "Never worry about your furry companion getting lost. Our Smart Pet Tracking Collar GPS is custom designed to be comfortable, lightweight, and rugged enough for any adventure.",
    image:
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=1000",
    gifUrl: "/media/gps-tracking-demo.gif",
    videoUrl: "/media/track-everything.mp4",
    gallery: [
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=1000",
    ],
    features: [
      "Featherlight housing clips onto collars",
      "IP68 dust and water resistance",
      "Virtual Geofence safety circle",
      "Built-in smart LED finder beacon",
      "Activity and sleep tracking",
    ],
    specifications: {
      Weight: "22 grams",
      "Waterproof Level": "IP68",
      "Battery Standby": "Up to 10 days",
      Positioning: "GPS + Glonass + Wi-Fi",
      Material: "Hypoallergenic nylon",
    },
    applications: [
      "Dog Runaway Prevention",
      "Hiking Pet Safety Gear",
      "Cat Roaming Tracking",
      "Animal Shelter Research",
    ],
  },

];
