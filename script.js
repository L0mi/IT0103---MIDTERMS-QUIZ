    const QUESTION_BANK = [
      { category: "IP Addressing", q: "What is the CIDR prefix for the subnet mask 255.255.255.240?", options: ["/24", "/26", "/28", "/30"], answer: "/28", explanation: "255.255.255.240 contains 28 network bits." },
      { category: "IP Addressing", q: "What is the CIDR prefix for the subnet mask 255.255.0.0?", options: ["/8", "/16", "/24", "/32"], answer: "/16", explanation: "The first two octets contain sixteen network bits." },
      { category: "IP Addressing", q: "Which address belongs to the 192.168.200.0/24 network?", options: ["192.168.199.13", "192.168.200.13", "192.168.201.13", "192.168.1.13"], answer: "192.168.200.13", explanation: "A /24 network keeps the first three octets as the network portion." },
      { category: "IP Addressing", q: "Which address is an IPv6 link-local address?", options: ["FDF8:F535:82EF::53", "FE80::261:2EFE:FE10:765", "2001:db8::1", "2401:db00:21:70e4::3"], answer: "FE80::261:2EFE:FE10:765", explanation: "IPv6 link-local addresses use the FE80::/10 range." },
      { category: "IP Addressing", q: "Which IPv4 address indicates that a host could not obtain an address from DHCP?", options: ["10.19.1.15", "192.168.1.15", "172.16.1.15", "169.254.1.15"], answer: "169.254.1.15", explanation: "169.254.0.0/16 is the APIPA range used when DHCP fails." },
      { category: "IP Addressing", q: "Which of these is a public IPv4 address?", options: ["10.156.89.1", "68.24.78.221", "172.16.152.48", "192.168.25.101"], answer: "68.24.78.221", explanation: "The other choices belong to private IPv4 ranges." },
      { category: "IP Addressing", q: "Which range contains IPv4 multicast addresses?", options: ["127.0.0.0–127.255.255.255", "169.254.0.0–169.254.255.255", "192.168.0.0–192.168.255.255", "224.0.0.0–239.255.255.255"], answer: "224.0.0.0–239.255.255.255", explanation: "Class D, from 224.0.0.0 through 239.255.255.255, is reserved for multicast." },
      { category: "IP Addressing", q: "The default gateway should be the IP address of which device?", options: ["A DNS server on the internet", "The router interface on the local network", "Any switch port", "The host loopback interface"], answer: "The router interface on the local network", explanation: "Hosts send traffic for remote networks to the router interface in their own subnet." },

      { category: "Models and Protocols", q: "At which OSI layer are source and destination port numbers added?", options: ["Data Link", "Network", "Transport", "Session"], answer: "Transport", explanation: "TCP and UDP port numbers are Transport layer information." },
      { category: "Models and Protocols", q: "Which information is included in a UDP header?", options: ["MAC addresses", "IP addresses", "Port numbers", "Route metrics"], answer: "Port numbers", explanation: "UDP uses source and destination ports to identify applications." },
      { category: "Models and Protocols", q: "Which OSI layer adds MAC addressing and an error-checking trailer during encapsulation?", options: ["Physical", "Data Link", "Network", "Transport"], answer: "Data Link", explanation: "The Data Link layer creates frames with MAC addresses and a frame check sequence." },
      { category: "Models and Protocols", q: "Which protocol securely transfers files using SSH?", options: ["TFTP", "SFTP", "HTTP", "NTP"], answer: "SFTP", explanation: "SFTP runs over SSH and protects file-transfer traffic." },
      { category: "Models and Protocols", q: "Which protocol resolves an IPv4 address to a MAC address?", options: ["ARP", "DNS", "DHCP", "ICMP"], answer: "ARP", explanation: "Address Resolution Protocol maps local IPv4 addresses to MAC addresses." },
      { category: "Models and Protocols", q: "Which protocol performs the IPv6 function that replaces ARP?", options: ["CDP", "NDP", "FTP", "SNMP"], answer: "NDP", explanation: "Neighbor Discovery Protocol uses ICMPv6 to discover neighbors and link-layer addresses." },
      { category: "Models and Protocols", q: "Which service uses A and PTR records?", options: ["DNS", "NAT", "IPS", "DHCP"], answer: "DNS", explanation: "A records map names to IPv4 addresses, while PTR records support reverse lookups." },
      { category: "Models and Protocols", q: "True or False: TCP is connection-oriented and provides reliable delivery.", options: ["True", "False"], answer: "True", explanation: "TCP establishes a connection and uses acknowledgements and retransmission." },
      { category: "Models and Protocols", q: "True or False: UDP uses sequence numbers to guarantee delivery.", options: ["True", "False"], answer: "False", explanation: "UDP is connectionless and does not provide TCP-style guaranteed delivery." },

      { category: "Switching and VLANs", q: "What does a switch do with a frame whose destination MAC address is unknown?", options: ["Drops it immediately", "Sends it only to the router", "Floods it out active ports except the incoming port", "Requests the address from DNS"], answer: "Floods it out active ports except the incoming port", explanation: "Unknown unicast traffic is flooded within the VLAN." },
      { category: "Switching and VLANs", q: "Which protocol prevents Layer 2 loops by blocking redundant paths?", options: ["STP", "DHCP", "NAT", "OSPF"], answer: "STP", explanation: "Spanning Tree Protocol creates a loop-free logical topology." },
      { category: "Switching and VLANs", q: "Which type of switch port carries traffic for multiple VLANs between switches?", options: ["Access port", "Console port", "Trunk port", "WAN port"], answer: "Trunk port", explanation: "A trunk carries tagged traffic for multiple VLANs." },
      { category: "Switching and VLANs", q: "Why are VLANs used in a network?", options: ["To remove the need for switches", "To reduce the size of broadcast domains", "To turn IPv4 into IPv6", "To increase cable length"], answer: "To reduce the size of broadcast domains", explanation: "Each VLAN creates a separate logical broadcast domain." },
      { category: "Switching and VLANs", q: "A computer in a new VLAN cannot reach networks outside that VLAN. What must normally be configured on the computer?", options: ["A default gateway", "A loopback address", "A second MAC address", "A console password"], answer: "A default gateway", explanation: "Traffic leaving the local subnet must be sent to a Layer 3 gateway." },
      { category: "Switching and VLANs", q: "Why assign an IP address to the management VLAN of a Layer 2 switch?", options: ["To make the switch a DHCP server", "To allow remote management through SSH or Telnet", "To route all user traffic", "To provide power over Ethernet"], answer: "To allow remote management through SSH or Telnet", explanation: "A management IP lets administrators reach the switch remotely." },
      { category: "Switching and VLANs", q: "True or False: A switch normally forwards a known unicast frame only toward the destination port.", options: ["True", "False"], answer: "True", explanation: "The switch uses its MAC address table to choose the destination port." },

      { category: "Routing and WAN", q: "What is an advantage of dynamic routing?", options: ["It automatically maintains routing information", "It removes all broadcast traffic", "It replaces DHCP", "It requires no router resources"], answer: "It automatically maintains routing information", explanation: "Dynamic routing protocols learn and update routes when the network changes." },
      { category: "Routing and WAN", q: "Which metric does RIP use to select routes?", options: ["Bandwidth", "Delay", "Hop count", "MAC address"], answer: "Hop count", explanation: "RIP prefers the route with the fewest router hops." },
      { category: "Routing and WAN", q: "How is a static route added to a routing table?", options: ["It is entered by a network administrator", "It is learned from DNS", "It is created by a switch", "It is received from a DHCP client"], answer: "It is entered by a network administrator", explanation: "Static routes are manually configured." },
      { category: "Routing and WAN", q: "What does NAT allow a small office to do?", options: ["Share a public address among private hosts", "Convert copper cable to fiber", "Prevent all routing loops", "Replace DNS records"], answer: "Share a public address among private hosts", explanation: "NAT translates private addresses for communication through a public address." },
      { category: "Routing and WAN", q: "What is a VPN?", options: ["A secure private connection over a public network", "A physical cable between VLANs", "A list of MAC addresses", "A wireless network name"], answer: "A secure private connection over a public network", explanation: "A VPN creates an encrypted tunnel across an untrusted network." },
      { category: "Routing and WAN", q: "True or False: The internet is an example of a wide area network.", options: ["True", "False"], answer: "True", explanation: "The internet interconnects networks across very large geographic areas." },
      { category: "Routing and WAN", q: "Which topology offers the greatest path redundancy?", options: ["Bus", "Star", "Mesh", "Line"], answer: "Mesh", explanation: "A mesh provides multiple connections between nodes, improving fault tolerance." },

      { category: "Media and Wireless", q: "Which medium is least affected by electromagnetic interference?", options: ["UTP copper", "Coaxial cable", "Fiber-optic cable", "Wireless radio"], answer: "Fiber-optic cable", explanation: "Fiber transmits light rather than electrical signals." },
      { category: "Media and Wireless", q: "Which connector is commonly used for twisted-pair Ethernet cable?", options: ["RJ-11", "RJ-45", "SC", "BNC"], answer: "RJ-45", explanation: "Copper Ethernet patch cables commonly use an 8-position RJ-45 connector." },
      { category: "Media and Wireless", q: "Which IEEE standard family defines Wi-Fi?", options: ["802.3", "802.11", "802.1Q", "802.15.4 only"], answer: "802.11", explanation: "IEEE 802.11 defines wireless LAN technologies." },
      { category: "Media and Wireless", q: "What does SSID identify on a wireless network?", options: ["The network name", "The router password", "The encryption key", "The client MAC address"], answer: "The network name", explanation: "The SSID is the name used to identify a Wi-Fi network." },
      { category: "Media and Wireless", q: "Which tool locates faults and measures loss along a fiber-optic cable?", options: ["Toner probe", "Multimeter", "OTDR", "Loopback plug"], answer: "OTDR", explanation: "An optical time-domain reflectometer tests fiber links and locates events along the cable." },
      { category: "Media and Wireless", q: "When is shielded twisted-pair cable preferred over UTP?", options: ["In an area with strong external interference", "When no network adapter is installed", "Only for dial-up connections", "When wireless coverage is weak"], answer: "In an area with strong external interference", explanation: "Shielding helps reduce electromagnetic and radio-frequency interference." },
      { category: "Media and Wireless", q: "True or False: WPA3 helps secure authentication between a wireless client and access point.", options: ["True", "False"], answer: "True", explanation: "WPA3 strengthens Wi-Fi authentication and encryption." },

      { category: "Security", q: "Which device permits or denies traffic based on addresses, ports, and applications?", options: ["Firewall", "Hub", "Patch panel", "Repeater"], answer: "Firewall", explanation: "A firewall applies security rules to network traffic." },
      { category: "Security", q: "Which part of AAA verifies a user's identity?", options: ["Authentication", "Authorization", "Accounting", "Availability"], answer: "Authentication", explanation: "Authentication confirms who the user or device is." },
      { category: "Security", q: "What does confidentiality mean in information security?", options: ["Data stays secret from unauthorized users", "Data is always online", "Data cannot be deleted", "Data is stored twice"], answer: "Data stays secret from unauthorized users", explanation: "Confidentiality prevents unauthorized disclosure of information." },
      { category: "Security", q: "What is the main purpose of a perimeter network or DMZ?", options: ["To provide a buffer between a private network and the internet", "To store only employee laptops", "To replace the core switch", "To increase Wi-Fi speed"], answer: "To provide a buffer between a private network and the internet", explanation: "A perimeter network isolates public-facing services from the internal network." },
      { category: "Security", q: "True or False: A public-facing web server is a suitable device to place in a perimeter network.", options: ["True", "False"], answer: "True", explanation: "Public services are commonly isolated in a perimeter network." },

      { category: "Troubleshooting", q: "Which command traces the routers that packets pass through to a destination on Windows?", options: ["ipconfig", "tracert", "netstat", "nslookup"], answer: "tracert", explanation: "Tracert displays each responding hop along a network path." },
      { category: "Troubleshooting", q: "A host can ping an IP address but cannot reach the same server by name. What is the likely problem?", options: ["DNS resolution", "The Ethernet cable", "The host MAC address", "The monitor"], answer: "DNS resolution", explanation: "IP connectivity works, so failure by name points to DNS." },
      { category: "Troubleshooting", q: "Which Windows utility checks whether DNS resolves a hostname correctly?", options: ["nslookup", "format", "tasklist", "arp -d"], answer: "nslookup", explanation: "Nslookup queries DNS servers and displays name-resolution results." },
      { category: "Troubleshooting", q: "Which Cisco command displays the currently active configuration?", options: ["show startup-config", "show running-config", "show protocols only", "erase startup-config"], answer: "show running-config", explanation: "The running configuration is the configuration currently active in memory." },
      { category: "Troubleshooting", q: "A Cisco switch cannot be reached through the network. Which out-of-band connection can be used?", options: ["Console", "Telnet", "SSH", "SNMP"], answer: "Console", explanation: "A console connection does not depend on network connectivity." },
      { category: "Troubleshooting", q: "Which support ticket should receive the highest priority?", options: ["A request to relocate a printer", "An active webinar has lost internet access", "A cafeteria access point has been down for an hour", "One cloud app feels slightly slower"], answer: "An active webinar has lost internet access", explanation: "It is a current, time-sensitive service interruption with immediate impact." },
      { category: "Troubleshooting", q: "True or False: Ping can help determine whether a remote host is reachable.", options: ["True", "False"], answer: "True", explanation: "Ping uses ICMP echo messages to test basic IP reachability." },
      { category: "Troubleshooting", q: "True or False: A blinking activity light on an Ethernet switch port always means the port has failed.", options: ["True", "False"], answer: "False", explanation: "A blinking green light commonly indicates normal traffic activity." },

      { category: "Cloud and Virtualization", q: "Which cloud service model gives users access to a complete application through the internet?", options: ["IaaS", "PaaS", "SaaS", "LAN"], answer: "SaaS", explanation: "Software as a Service delivers finished applications to users." },
      { category: "Cloud and Virtualization", q: "Which cloud service model provides virtual machines, storage, and virtual networks?", options: ["IaaS", "PaaS", "SaaS", "WLAN"], answer: "IaaS", explanation: "Infrastructure as a Service supplies virtualized computing resources." },
      { category: "Cloud and Virtualization", q: "Which cloud service model provides tools and a managed environment for developing applications?", options: ["IaaS", "PaaS", "SaaS", "NAT"], answer: "PaaS", explanation: "Platform as a Service provides the platform needed to build and run applications." },
      { category: "Cloud and Virtualization", q: "True or False: A Type 1 hypervisor runs directly on physical hardware.", options: ["True", "False"], answer: "True", explanation: "A Type 1 or bare-metal hypervisor runs without a host operating system underneath it." },
      { category: "Cloud and Virtualization", q: "True or False: A Type 2 hypervisor is also called a bare-metal hypervisor.", options: ["True", "False"], answer: "False", explanation: "A Type 2 hypervisor runs on a host operating system; Type 1 is bare-metal." }
    ];

    const $ = (id) => document.getElementById(id);
    const screens = ["startScreen", "quizScreen", "resultScreen"];
    const state = { questions: [], index: 0, totalChecks: 0 };

    function shuffle(items) {
      const copy = [...items];
      for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      return copy;
    }

    function showScreen(id) {
      screens.forEach((screenId) => $(screenId).classList.toggle("active", screenId === id));
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function makeSession() {
      const countValue = $("questionCount").value;
      const count = countValue === "all" ? QUESTION_BANK.length : Number(countValue);
      state.questions = shuffle(QUESTION_BANK).slice(0, count).map((item) => ({
        ...item,
        options: shuffle(item.options),
        selected: null,
        firstChoice: null,
        attempts: 0,
        solved: false,
        hadWrongAnswer: false,
        lastChecked: null
      }));
      state.index = 0;
      state.totalChecks = 0;
    }

    function firstTryCount() {
      return state.questions.filter((q) => q.solved && !q.hadWrongAnswer).length;
    }

    function correctedCount() {
      return state.questions.filter((q) => q.solved && q.hadWrongAnswer).length;
    }

    function updateScoreboard() {
      $("firstTryScore").textContent = firstTryCount();
      $("correctedScore").textContent = correctedCount();
    }

    function setFeedback(kind, title, message) {
      const feedback = $("feedback");
      feedback.className = `feedback show ${kind}`;
      feedback.innerHTML = `<strong>${title}</strong><span>${message}</span>`;
    }

    function clearFeedback() {
      const feedback = $("feedback");
      feedback.className = "feedback";
      feedback.textContent = "";
    }

    function renderQuestion() {
      const question = state.questions[state.index];
      const number = state.index + 1;
      const total = state.questions.length;

      $("progressText").textContent = `Question ${number} of ${total}`;
      $("categoryText").textContent = question.category;
      $("progressFill").style.width = `${(number / total) * 100}%`;
      $("typePill").textContent = question.options.length === 2 && question.options.includes("True") ? "True or False" : "Multiple Choice";
      $("questionNumber").textContent = `#${number}`;
      $("questionText").textContent = question.q;
      $("backButton").disabled = state.index === 0;

      const options = $("options");
      options.innerHTML = "";
      question.options.forEach((option, optionIndex) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "option";
        button.innerHTML = `<span class="letter">${String.fromCharCode(65 + optionIndex)}</span><span>${option}</span>`;
        if (question.selected === option) button.classList.add("selected");
        if (question.solved && option === question.answer) button.classList.add("correct");
        button.disabled = question.solved;
        button.addEventListener("click", () => selectOption(option));
        options.appendChild(button);
      });

      clearFeedback();
      if (question.solved) {
        setFeedback("good", question.hadWrongAnswer ? "Corrected!" : "Correct!", question.explanation);
      } else if (question.hadWrongAnswer && question.lastChecked === question.selected) {
        const selectedButton = [...options.children].find((button) => button.lastElementChild.textContent === question.selected);
        if (selectedButton) selectedButton.classList.add("wrong");
        setFeedback("bad", "That answer is incorrect.", "Change your answer and check again before continuing.");
      } else if (question.hadWrongAnswer) {
        setFeedback("note", "Answer changed.", "Check the new answer to continue.");
      }

      $("checkButton").disabled = question.solved || !question.selected;
      $("nextButton").disabled = !question.solved;
      $("nextButton").textContent = state.index === total - 1 ? "Finish Quiz" : "Next";
      updateScoreboard();
    }

    function selectOption(option) {
      const question = state.questions[state.index];
      if (question.solved) return;
      question.selected = option;
      clearFeedback();
      renderQuestion();
    }

    function checkAnswer() {
      const question = state.questions[state.index];
      if (!question.selected || question.solved) return;

      question.attempts += 1;
      state.totalChecks += 1;
      if (question.firstChoice === null) question.firstChoice = question.selected;
      question.lastChecked = question.selected;

      if (question.selected === question.answer) {
        question.solved = true;
      } else {
        question.hadWrongAnswer = true;
      }
      renderQuestion();
    }

    function moveBack() {
      if (state.index > 0) {
        state.index -= 1;
        renderQuestion();
      }
    }

    function moveNext() {
      const question = state.questions[state.index];
      if (!question.solved) return;
      if (state.index === state.questions.length - 1) {
        finishQuiz();
      } else {
        state.index += 1;
        renderQuestion();
      }
    }

    function finishQuiz() {
      const correct = firstTryCount();
      const corrected = correctedCount();
      const total = state.questions.length;
      const percent = Math.round((correct / total) * 100);

      $("resultPercent").textContent = `${percent}%`;
      $("resultCorrect").textContent = `${correct} / ${total}`;
      $("resultCorrected").textContent = corrected;
      $("resultAttempts").textContent = state.totalChecks;
      $("resultMessage").textContent = percent >= 80
        ? "Strong work. Review the corrected items to make the concepts stick."
        : "Keep practicing. The answer review shows exactly which concepts to revisit.";
      buildReview();
      $("reviewCard").classList.add("hidden");
      $("reviewButton").textContent = "Show Answer Review";
      showScreen("resultScreen");
    }

    function buildReview() {
      const list = $("reviewList");
      list.innerHTML = "";
      state.questions.forEach((question, index) => {
        const item = document.createElement("article");
        item.className = `review-item${question.hadWrongAnswer ? " corrected" : ""}`;
        item.innerHTML = `
          <div class="review-heading">
            <strong>${index + 1}. ${question.q}</strong>
            <span class="review-status">${question.hadWrongAnswer ? "Corrected" : "First try"}</span>
          </div>
          <p class="answer-line"><b>Your first answer:</b> ${question.firstChoice}</p>
          <p class="answer-line"><b>Correct answer:</b> ${question.answer}</p>
          <p class="explanation">${question.explanation}</p>`;
        list.appendChild(item);
      });
    }

    function startQuiz() {
      makeSession();
      renderQuestion();
      showScreen("quizScreen");
    }

    $("startButton").addEventListener("click", startQuiz);
    $("checkButton").addEventListener("click", checkAnswer);
    $("backButton").addEventListener("click", moveBack);
    $("nextButton").addEventListener("click", moveNext);
    $("retryButton").addEventListener("click", startQuiz);
    $("homeButton").addEventListener("click", () => showScreen("startScreen"));
    $("reviewButton").addEventListener("click", () => {
      const card = $("reviewCard");
      const willShow = card.classList.contains("hidden");
      card.classList.toggle("hidden");
      $("reviewButton").textContent = willShow ? "Hide Answer Review" : "Show Answer Review";
      if (willShow) card.scrollIntoView({ behavior: "smooth", block: "start" });
    });
