<?php

class KokenLightgalleryPlugin extends KokenPlugin {

	function __construct() {
		$this->require_setup = false;
		$this->register_hook('before_closing_head', 'renderJsCss');
		$this->register_hook('before_closing_body', 'renderBody');
	}

	// Load resources and render scripts to the page
	function renderJsCss() {
		$path = $_SERVER['REQUEST_URI'];
		if (! preg_match('/\?\/albums\/.+/', $path)) {
			return;
		}

		$js_path = $this->get_path() . '/js/plugin.js';

		echo <<<HTML
	<koken:if true="settings.use_lightgallery">
		<script src="$js_path"></script>
	</koken:if>
HTML;
	}

	function renderBody() {
		$path = $_SERVER['REQUEST_URI'];
		if (! preg_match('/\?\/albums\/.+/', $path)) {
			return;
		}

		echo <<<HTML
	<koken:if true="settings.use_lightgallery">
		<koken:load>
		<koken:loop>
		<script>
		  LightGallery.addImage({
		    index: {{index}},
		    src: "{{content.presets.huge.url}}",
		    mobileSrc: "{{content.presets.large.url}}",
		    thumb: "{{content.presets.small.url}}",
		    subHtml: '<h2>{{content.title}}</h2><p>{{content.caption}}</p>',
		    <koken:exif>exif: {{exif.to_json}},</koken:exif>
		    <koken:geolocation>geolocation: {{geolocation.to_json}},</koken:geolocation>
				<koken:iptc>iptc: {{iptc.to_json}},</koken:iptc>
		  });
		</script>
		</koken:loop>
		</koken:load>
	</koken:if>
HTML;
	}
}
