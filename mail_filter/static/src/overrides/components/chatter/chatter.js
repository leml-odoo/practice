import { patch } from "@web/core/utils/patch";

import { Chatter } from "@mail/chatter/web_portal/chatter";


patch(Chatter.prototype, {
    setup() {
        super.setup()
        this.state.showMessages = "all"
    },
    setFilter(filter) {
        this.state.showMessages = filter
    }
})
