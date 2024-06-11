const HTTP_REQUEST = {
  GET(uri, headers) {
    return $fetch(uri, {
      method: "GET",
      headers: headers ? headers : {},
    });
  },

  POST(uri, body, headers) {
    return $fetch(uri, {
      method: "POST",
      body: body,
      headers: { "Content-Type": "application/json" },
    });
  },

  DELETE(uri, headers, body) {
    return $fetch(uri, {
      method: "DELETE",
      body: body,
      headers: headers,
    });
  },

  PUT(uri, headers, body) {
    return $fetch(uri, {
      method: "PUT",
      body: body,
      headers: headers,
    });
  },

  PATCH(uri, headers, body) {
    return $fetch(uri, {
      method: "PATCH",
      body: body,
      headers: headers,
    });
  },
};

export default HTTP_REQUEST;
