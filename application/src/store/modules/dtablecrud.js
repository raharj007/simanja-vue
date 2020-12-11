const dtablecrud = {
    namespaced: true,
    state: () => ({
        title: '',
        dataurl: '',
        createurl: '',
        updateurl: '',
        deleteurl: '',
        headers: [],
        inputs: [],
        editedItem: {},
        defaultItem: {},
    }),
    mutations: {
        setTitle(state, title) {
            state.title = title;
        },
        setDataUrl(state, url) {
            state.dataurl = url;
        },
        setCreateUrl(state, url) {
            state.createurl = url;
        },
        setUpdateUrl(state, url) {
            state.updateurl = url;
        },
        setDeleteUrl(state, url) {
            state.deleteurl = url;
        },
        setHeader(state, headers) {
            state.headers = headers;
        },
        setInput(state, input) {
            state.labelItem = input;
        },
        setEditedItem(state, item) {
            state.editedItem = item;
        },
        setDefaultItem(state, item) {
            state.defaultItem = item;
        }
    },
    getters: {
        getTitle: state => state.title,
        getDataUrl: state => state.dataurl,
        getCreateUrl: state => state.dataurl,
        getUpdateUrl: state => state.dataurl,
        getDeleteUrl: state => state.dataurl,
        getHeader: state => state.headers,
        getInput: state => state.inputs,
        getEditedItem: state => state.editedItem,
        getDefaultItem: state => state.defaultItem,
    },
    actions: {

    }
}

export default dtablecrud;