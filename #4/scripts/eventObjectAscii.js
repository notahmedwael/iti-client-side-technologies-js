document.addEventListener('keydown', function(event) {
    // Skip if only a modifier is being held down
    const modifiersOnly = ["Control", "Alt", "Shift", "Meta"];
    if (modifiersOnly.includes(event.key)) return;

    // Meta key is like command on mac and win on windows and super on linux

    var hasModifier = event.ctrlKey || event.altKey || event.shiftKey || event.metaKey;
    
    // Prevent browser defaults if it's a shortcut
    if (hasModifier) {
        event.preventDefault();
    }

    var parts = [];
    if (event.ctrlKey)  parts.push("Ctrl");
    if (event.altKey)   parts.push("Alt");
    if (event.shiftKey) parts.push("Shift");
    
    // Main key

    parts.push(event.key.toUpperCase());

    var comboString = parts.join(" + ");
    var asciiCode = event.keyCode;

    alert(`Key: ${comboString}\nCode: ${asciiCode}`);
});