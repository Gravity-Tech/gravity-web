<template lang="pug">
  section.block.block-reaching
    div.container-content
      div.container-content-wrap
        div.block-text
          h2.text.text-title Trusted <br>data hub
          p.text The core framework of the Gravity protocol is Pulse, a two-step data provision workflow that prescribes how information is fed from external sources to blockchain networks and how oracle consensus about the data is achieved.
          p.text Unlike monolithic blockchain nodes, such as those of Ethereum or Waves, Gravity nodes are adjustable and consist of multiple modules, supporting various types of services and data sources. 
        div.block-image
          img.block-image-wrap(src='img/reaching.png', alt='watching data')
          div.block-image-text
            div.block-image-text-wrap
              p.text End-users of Gravity data services can subscribe to a certain type of data to be fed into a chosen blockchain in exchange for a regular fee. The end result is highly configurable: for example, when requesting exchange rates, consumers of data can configure the variability of values required for their use case.
</template>

<style lang="scss" scoped>
@import "../../assets/scss/mixins/media.scss";

.block {
  &-reaching {
    @include b(1024) {
      background: none;
    }

    .container-content {
      max-width: 1450px;
      justify-content: flex-end !important;

      @include b(mobile) {
        padding: 0 20px;
      }

      &-wrap {
        grid-template-columns: minmax(300px, 380px) minmax(300px, 770px);
        max-width: 1250px;
        width: 100%;
        display: grid;
        z-index: 2;
        grid-gap: 50px;

        @include b(mobile) {
          display: flex !important;
          flex-direction: column;
        }

        .text-title {
          br {
            @include b(mobile) {
              display: none;
            }
          }
        }
      }

      .block {
        z-index: 1;

        &-image {
          &-text {
            margin-top: -10px;
            display: flex;
            justify-content: center;

            &-wrap {
              width: 100%;
              max-width: 700px;
              padding-right: 80px;

              @include b(tablet) {
                max-width: 430px;
                padding-right: 0px;
              }

              @include b(mobile) {
                margin-top: 0;
                max-width: 100%;
              }
            }
          }
        }

        &-text {
          background: url("~static/img/bg-title-watching.svg") no-repeat center
            50px/100%;

          @include b(mobile) {
            background: url("~static/img/bg-title-watching.svg") no-repeat
              center 10px/40%;
          }

          @include bb(endmobile, 0) {
            background: url("~static/img/bg-title-watching.svg") no-repeat
              center 0px/100%;
          }
        }
      }
    }
  }
}
</style>
