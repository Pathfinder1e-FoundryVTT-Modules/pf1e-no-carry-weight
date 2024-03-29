
export function extendActorTemplate(ActorTemplate) {
    return class NoCarryWeightActorTemplate extends ActorTemplate {

        _computeEncumbrance() {
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

        getCarryCapacity() {
            const carryCapacity = this.system.details.carryCapacity;
            carryCapacity.bonus.total = 0;
            carryCapacity.multiplier.total = 1;
            return super.getCarryCapacity();
        }
    }
}

export function removeCarryWeight(sheet, [html], data) {
    html.querySelector(".encumbrance").parentNode.remove();
    html.querySelector(".carry-bonus").remove();

    html.querySelector('.lift').parentNode.classList.remove('tooltip');
    html.querySelector('.inventory .tab-footer .tooltipcontent').remove();
}