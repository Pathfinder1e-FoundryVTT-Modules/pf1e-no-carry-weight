
export function extendActorTemplate(ActorTemplate) {
    return class NoCarryWeightActorTemplate extends ActorTemplate {

        _computeEncumbrance() {
            console.log("Hello World")

            const attributes = this.system.attributes;
            if (attributes.encumbrance === undefined) attributes.encumbrance = {};
            const encumbrance = attributes.encumbrance;

            const capacity = this.getCarryCapacity();
            capacity.carry = capacity.heavy * 2;
            capacity.drag = capacity.heavy * 5;
            encumbrance.levels = capacity;
            encumbrance.carriedWeight = 0;
            encumbrance.level = 0;

            return {
                maxDexBonus: null,
                acp: 0
            }
        }
    }
}

export function removeCarryWeight(sheet, [html], data) {
    html.querySelector(".encumbrance").parentNode.remove();
    html.querySelector(".carry-bonus").remove();
}