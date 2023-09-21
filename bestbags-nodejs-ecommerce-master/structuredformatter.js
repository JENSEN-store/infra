const { formatDateTime } = require("admin-bro");
const { request } = require("./app");
const { json } = require("express");

class StructuredFormatter{
  function format(record) {
    let log_entry = {
      "level": record.levelname,
      "message": record.getMessage(),
      "timestamp": formatDateTime(record),
    };
    if (request) {
      log_entry.update(
        {
          "path": request.path,
          "method": request.method,
          "remote_addr": request.remote_addr,
        }
      );
    };
    if (record.exc_info) {
      log_entry["exception"] = this.formatException(record.exc_info);
    };
    return json.dumps(log_entry)
  };

  export default format(record);
}