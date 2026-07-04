const Colors = {
Primary: "RED",
Secondary: "BLUE"
} as const;

type ValidColor = typeof Colors[keyof typeof Colors];

function setColor(c: ValidColor) : void {
    console.log(`color set to ${c}`)
}

setColor("RED");
setColor("BLUE");