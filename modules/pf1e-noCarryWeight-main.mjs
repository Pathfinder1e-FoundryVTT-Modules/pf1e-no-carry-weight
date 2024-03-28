import {extendActorTemplate, removeCarryWeight} from "./documents/actor.mjs";

Hooks.on("pf1PostInit", () => {
    console.log("No Carry Weight Initialized");
    pf1.documents.actor = Object.assign(pf1.documents.actor, {
        ActorBasePF: extendActorTemplate(pf1.documents.actor.ActorBasePF),
        ActorCharacterPF: extendActorTemplate(pf1.documents.actor.ActorCharacterPF),
        ActorNPCPF: extendActorTemplate(pf1.documents.actor.ActorNPCPF),
        ActorPF: extendActorTemplate(pf1.documents.actor.ActorPF)
    });


    CONFIG.Actor.documentClasses = Object.assign(CONFIG.Actor.documentClasses, {
        basic: extendActorTemplate(CONFIG.Actor.documentClasses.basic),
        character: extendActorTemplate(CONFIG.Actor.documentClasses.character),
        npc: extendActorTemplate(CONFIG.Actor.documentClasses.npc)
    })
});


Hooks.on("renderActorSheetPF", removeCarryWeight);