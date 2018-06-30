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
            "alert-{{TYPE_HAS}}": "has(Success|Danger|Warning|Info)",
            "alert-{{TYPE_IS}}": "is(Primary|Secondary|Dark|Light)",
        }
    }
};
