import { MessageObject } from "@/core/models/domain/message-object.model";

export function performTestFetch() {
    fetch('http://192.168.43.251:8080/api')
        .then(res => res.json())
        .then((data: MessageObject) => {
            console.log(data.message);
        })
}