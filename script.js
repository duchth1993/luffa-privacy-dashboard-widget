function refreshStats() {
  // Mock data (thay bằng real API khi có)
  const e2eeCount = Math.floor(Math.random() * 500) + 100;
  const relayCount = Math.floor(Math.random() * 20) + 5;
  const didVerified = Math.random() > 0.2 ? "Verified" : "Not Verified";

  // Tính privacy score giả lập (0-100)
  const score = Math.min(100, 
    (e2eeCount / 5) + (relayCount * 3) + (didVerified === "Verified" ? 40 : 0)
  );

  document.getElementById("e2ee-count").textContent = e2eeCount;
  document.getElementById("relay-count").textContent = relayCount;
  document.getElementById("did-status").textContent = didVerified;
  document.getElementById("privacy-score").textContent = Math.round(score) + "%";
}

// Load lần đầu
refreshStats();
