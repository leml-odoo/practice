import { patch } from "@web/core/utils/patch"
import { Message } from "@mail/core/common/message_model";

patch(Message.prototype, {
    get isNote() {
        return (
            ['notification', 'auto_comment'].includes(this.message_type) ||
            this.message_type !== 'user_notification' && !this.is_discussion
        )
    }
})
