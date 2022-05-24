export default function reducer(state, action) {
    switch (action.type) {
        case "SHOW_PLUGIN_MODAL":
            return {
                ...state,
                pluginModal: true,
            };
        case "HIDE_PLUGIN_MODAL":
            return {
                ...state,
                pluginModal: false,
            };
    }
}
