<script>
    import { createEventDispatcher } from 'svelte';

    export let background = 'none';
    export let color = 'transparent';
    export let width = 16;
    export let name = 'Lane';

    const dispatch = createEventDispatcher();

    const passName = (e) => {
        dispatch('hover', name)
    }

    const requestDelete = (e) => {
        dispatch('delete', name)
    }
</script>

<div class="lane"
     on:mouseover={passName}
     on:click={requestDelete}
     style="width: {width}px; background-image: url('{background}'); background-color: {color}">
</div>

<style type="text/sass">
  .lane
    position: relative
    height: 100%
    background-repeat: repeat-y
    background-position: center
    background-size: 100%

    &:hover
      &:before
        content: 'X'
        text-align: center
        vertical-align: middle
        position: absolute
        top: 0
        left: 0
        height: 100%
        width: 100%
        color: rgba(255, 0, 0, .75)
        background: rgba(255, 0, 0, .1)

</style>
