document.addEventListener('DOMContentLoaded', function() {
    // Load all components with data-include attribute
    document.querySelectorAll('[data-include]').forEach(element => {
        const filePath = element.getAttribute('data-include');
        fetch(filePath)
            .then(response => response.text())
            .then(data => {
                element.innerHTML = data;
                // Re-trigger scripts if needed
                element.querySelectorAll('script').forEach(script => {
                    eval(script.text);
                });
            })
            .catch(error => console.error('Error loading component:', error));
    });
});
