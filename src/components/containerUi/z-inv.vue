<template>
    <div class="mcui mcui-Crafting_Table">
        <span style="font-family: Minecraft, Sans serif;color: #454545;text-rendering: optimizeLegibility;">Contenu du coffre</span>
        <br>
        <div class="mcui-input">
            <div v-for="(row, index) in inv" :key="index" class="mcui-row">
                <div v-for="(cell, index) in row" :key="index" class="invslot">
                    <span v-if="cell.id" class="invslot-item" :data-minetip-title="cell.id">
                        <a :href="'/' + cell.id">
                            <span class="sprite inv-sprite" style="background-image:url(https://d1u5p3l4wpay3k.cloudfront.net/minecraft_fr_gamepedia/4/44/InvSprite.png);background-position:-224px -1120px"><br></span>
                        </a>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'z-inv',
  props:
    ['container'], // tableau d'items sous la forme [{id, count, ...}, {id, count, ...}]
  computed: {
    typeInv: function () {
      // TODO EXTRAIRE CES PARAMETRES AILLEURS
      return {
        CHEST: {row: 3, cell: 9},
        DOUBLECHEST: {row: 6, cell: 9},
        HOPPER: {row: 1, cell: 5}
      }
    },
    inv: function () { // Formate la liste des objets au format ligne => cellule prêt à être affiché
      let type = this.typeInv[this.container.containerType]
      return Array.from(new Array(type.row * type.cell), (value, index) => {
        if (index < this.container.content.length) {
          return this.container.content[index]
        }

        return {}
      }).chunk(type.cell)
    }
  }
}
</script>

<style>
    @font-face {
        font-family:Minecraft;
        src:url("//hydra-media.cursecdn.com/hydra/fonts/minecraft.eot?#iefix"),url(//hydra-media.cursecdn.com/hydra/fonts/minecraft.woff) format('woff'),url(//hydra-media.cursecdn.com/hydra/fonts/minecraft.ttf) format('truetype')
    }
    @media (-webkit-min-device-pixel-ratio:1.5),(min-resolution:1.5dppx) {
    }
    .invslot {
        position:relative;
        display:inline-block;
        background:#8B8B8B no-repeat center center / 32px 32px;
        border:2px solid;
        border-color:#373737 #FFF #FFF #373737;
        width:32px;
        height:32px;
        font-size:16px;
        line-height:1;
        text-align:left;
        vertical-align:bottom;
        font-family: Minecraft, sans-serif;
        color: white;
        text-rendering: optimizeLegibility;
    }
    .invslot:before,.invslot:after {
        content:"";
        position:absolute;
        background-color:#8B8B8B;
        height:2px;
        width:2px;
        pointer-events:none
    }
    .invslot:before {
        bottom:-2px;
        left:-2px
    }
    .invslot:after {
        top:-2px;
        right:-2px
    }
    .invslot-large {
        padding:8px
    }
    .invslot-item,.invslot-item > a:first-child {
        position:relative;
        display:block;
        margin:-2px;
        padding:2px
    }

    .invslot-plain > .invslot-item,.invslot-plain > .invslot-item > a:first-child {
        margin:0;
        padding:0
    }
    .mcui {
        display:inline-block;
        position:relative;
        background-color:#C6C6C6;
        border:2px solid;
        border-color: #ffffff #5B5B5B #5B5B5B #ffffff;
        text-align:left;
        white-space:nowrap;
        vertical-align:bottom;
        padding: 6px 10px 6px 6px;
        border-radius: 3px;
    }
    .mcui-Crafting_Table .mcui-row {
        display:block
    }

    .sprite {
        display:inline-block;
        vertical-align:text-top;
        height:16px;
        width:16px;
        background-repeat:no-repeat
    }

    .inv-sprite {
        background-image:url(https://minecraft-fr.gamepedia.com/media/minecraft-fr.gamepedia.com/4/44/InvSprite.png);
        width:32px;
        height:32px;
        vertical-align:middle
    }

    .sprite-preview:hover div {
        opacity:0.7 !important
    }

    .invslot [data-minetip-title] {
        position: relative;
        font-family: Minecraft, serif;
    }

    .invslot [data-minetip-title]:hover:before {
        content: attr(data-minetip-title);
        position: absolute;
        left: -5%;
        top: 115%;
        background: rgba(0,0,20,.9);
        padding: .1em .5em;
        height: 1.5em;
        border: solid 3px #26035d;
        border-radius: 5px;
        white-space: nowrap;
        z-index: 9001;
    }

    .invslot [data-minetip-title].tooltip-for-text:hover:before {
        left: 0%;
        top: 85%;
    }
</style>
