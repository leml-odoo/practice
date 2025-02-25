import { patch } from "@web/core/utils/patch";

import { Thread } from "@mail/core/common/thread";

Thread.props.push(
    "messageFilter?"
)

Object.assign(Thread.defaultProps, {
    messageFilter: 'all'
})

patch(Thread.prototype, {
    setup() {
        super.setup()
    },

    get orderedMessages() {
        const messages = super.orderedMessages
        if (this.props.messageFilter === 'logs') {
            return messages.filter((m) => m.isNote)
        } else if (this.props.messageFilter === 'mails') {
            return messages.filter((m) => !m.isNote)
        }
        return messages
    },
})
