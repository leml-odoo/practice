import { patch } from "@web/core/utils/patch"

import { SearchMessageResult } from "@mail/core/common/search_message_result"

SearchMessageResult.props.push(
    "messageFilter?"
)

Object.assign(SearchMessageResult, {
    messageFilter: "all"
})

patch(SearchMessageResult.prototype, {
    get filteredMessages() {
        const messages = this.props.messageSearch.messages
        if (this.props.messageFilter === 'logs') {
            return messages.filter((m) => m.isNote)
        } else if (this.props.messageFilter === 'mails') {
            return messages.filter((m) => !m.isNote)
        }
        return messages
    }
})
