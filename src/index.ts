import { defineInterface } from "@directus/extensions-sdk";
import InterfaceComponent from "./interface.vue";

export default defineInterface({
    id: "directus-extension-classified-group",
    name: "Classified Group",
    icon: "brush",
    description: "A group to which a class can be assigned for custom styling.",
    component: InterfaceComponent,
    localTypes: ["group"],
    group: "group",
    types: ["alias"],
    options: () => {
        return [
            {
                field: "classes",
                name: "Class(es)",
                meta: {
                    width: "full",
                    interface: "input",
                },
            },
        ];
    },
    preview: `<svg width="156" height="96" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity=".25" d="M122 24H34a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h88a5 5 0 0 0 5-5V29a5 5 0 0 0-5-5Z" stroke="var(--theme--primary, var(--primary))" stroke-width="2" stroke-linecap="round" stroke-dasharray="1 5"/><path d="M86 31H40a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h46a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2ZM110 31H94a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2Z" fill="var(--theme--primary, var(--primary))" fill-opacity=".25"/><path opacity=".25" d="m122.628 55.344-87.75-6.63a5 5 0 0 0-5.362 4.608l-.753 9.972a5 5 0 0 0 4.609 5.362l87.749 6.63a5 5 0 0 0 5.363-4.608l.753-9.972a5 5 0 0 0-4.609-5.362Z" stroke="var(--theme--primary, var(--primary))" stroke-width="2"/><path d="M74.487 58.726 58.532 57.52a2 2 0 0 0-2.145 1.844l-.15 1.994a2 2 0 0 0 1.843 2.145l15.955 1.206a2 2 0 0 0 2.145-1.844l.15-1.994a2 2 0 0 0-1.843-2.145ZM122.101 62.324 86.203 59.61a2 2 0 0 0-2.145 1.844l-.15 1.994a2 2 0 0 0 1.843 2.145l35.898 2.713a2 2 0 0 0 2.145-1.844l.151-1.994a2 2 0 0 0-1.844-2.145Z" fill="var(--theme--primary, var(--primary))" fill-opacity=".25"/><path d="M131 14H25a6 6 0 0 0-6 6v56a6 6 0 0 0 6 6h106a6 6 0 0 0 6-6V20a6 6 0 0 0-6-6Z" stroke="var(--theme--primary, var(--primary))" stroke-width="2" stroke-linecap="round" stroke-dasharray="4 6"/></svg>`,
});
