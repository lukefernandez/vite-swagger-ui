import SwaggerUI from "swagger-ui";
import SwaggerUIStandalonePreset from "swagger-ui/dist/swagger-ui-standalone-preset";
import "swagger-ui/dist/swagger-ui.css";

SwaggerUI({
  urls: [
    { url: "./specs/petstore.json", name: "JSON — Pet Store" },
    {
      url: "./specs/petstore-expanded.yaml",
      name: "YAML — Pet Store Expanded",
    },
  ],
  dom_id: "#app",
  deepLinking: true,
  presets: [SwaggerUI.presets.apis, SwaggerUIStandalonePreset],
  layout: "StandaloneLayout",
});
