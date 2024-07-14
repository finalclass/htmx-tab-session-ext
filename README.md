# HTMX Tab Session Extension

## Overview

The HTMX Tab Session Extension is a custom extension for HTMX that generates and manages a unique session ID for each browser tab. This extension adds a custom header to all HTMX requests, allowing server-side code to identify and manage tab-specific sessions.

## Features

- Generates a secure, unique session ID for each browser tab
- Persists the session ID using `sessionStorage`
- Automatically adds the session ID as a custom header to all HTMX requests
- Works seamlessly with existing HTMX configurations

## Installation

1. Include the extension script in your HTML file after the HTMX script:

   ```html
   <script src="path/to/htmx.js"></script>
   <script src="path/to/htmx-tab-session-ext.js"></script>
   ```

2. Add the extension to your HTMX configuration:

   ```html
   <body hx-ext="tab-session">
   </body>
   ```

## Usage

Once installed, the extension works automatically. It will generate a unique session ID for each tab and include it in all HTMX requests as a custom header named `X-Tab-Session-ID`.

### Server-Side Handling

On the server side, you can access the tab session ID from the `X-Tab-Session-ID` header. Use this ID to manage tab-specific state or sessions.

Example (Python with Flask):

```python
from flask import request

@app.route('/api/endpoint')
def api_endpoint():
    tab_session_id = request.headers.get('X-Tab-Session-ID')
    # Use tab_session_id to manage tab-specific state
    ...
```

## Security Considerations

- The session ID is generated using `crypto.getRandomValues()` for cryptographic randomness.
- A timestamp is appended to the ID to further ensure uniqueness.
- The ID is stored in `sessionStorage`, which is isolated to the current tab and cleared when the tab is closed.
- Always use HTTPS in production to prevent interception of the session ID.

## Compatibility

This extension is compatible with HTMX version 1.0.0 and above. It's also tested with HTMX 2. It has been tested on modern browsers that support the Web Crypto API and `sessionStorage`.

## Contributing

Contributions to improve the extension are welcome. Please submit issues and pull requests on the project's GitHub repository.

## License

This extension is released under the MIT License. See the LICENSE file for details.

---

For more information about HTMX and its extension system, visit [https://htmx.org/](https://htmx.org/).
