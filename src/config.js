export default {
    layouts: {
        devices: {
            Tablet: 'sm',
            Laptop: 'md',
            Desktop: 'lg',
        },
        patterns: {
            "col-{{DEVICE_ALIAS}}-{{COLS}}": `in({{DEVICES}})`,
            "offset-{{DEVICE_ALIAS}}-{{COLS}}": `offsetIn({{DEVICES}})`,
        },
    },

    alert: {
        patterns: {
            "alert-{{TYPE}}": "has(Success|Danger|Warning|Info|Primary)",
        }
    }
};
