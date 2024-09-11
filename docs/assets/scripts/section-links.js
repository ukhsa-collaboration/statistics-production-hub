// Function to copy link to clipboard
function copylink(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert(`Link copied to clipboard:\n${text}`);
    }).catch(err => {
        console.error('Failed to copy link', err);
    });
}

// Add copy link icons to all heading elements
document.querySelectorAll('h1, h2, h3, h4, h5').forEach(heading => {
    // Ensure the heading has an ID for the anchor link
    if (!heading.id) {
        heading.id = heading.textContent.trim().toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
    }

    // Create the icon element
    const iconWrapper = document.createElement('span');
    iconWrapper.className = 'section-link';
    iconWrapper.title = 'Section link';
    iconWrapper.innerHTML = ' ';

    // Append the icon to the heading
    heading.appendChild(iconWrapper);

    // Add event listener for copying the link
    iconWrapper.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent the click event from bubbling up
        const url = `${window.location.origin}${window.location.pathname}#${heading.id}`;
        copylink(url);
    });
});
