<script>
    import Lane from './Lane.svelte'
    import allLanes from './available-lanes.js';

    let tooltip = ' ';
    let length = 100;

    const setTooltip = (e) => {
        tooltip = e.detail;
    }

    const pushLane = (lane, place) => {
        switch (place) {
            case 'left':
                lanes = [lane, ...lanes];
                break;
            case 'right':
                lanes = [...lanes, lane];
                break;
            default:
                lanes = [lane, ...lanes, lane]
                break;
        }
    }
    const deleteLane = (idx) => {
        lanes = [...lanes.slice(0, idx), ...lanes.slice(idx + 1)]
    }

    let lanes = [];
</script>

<main>
    <h1>Road Builder</h1>

    <div id="road" style="height: {length}px">
        {#each lanes as lane, idx}
            <Lane color="{lane.color}"
                  background="{lane.background}"
                  width="{lane.width}"
                  name="{lane.name}"
                  on:delete={() => deleteLane(idx)}
                  on:hover={setTooltip}/>
        {/each}
    </div>

    <div id="tooltip">{tooltip}</div>

    <div id="buttons">
        {#each allLanes as lane}
            <div class="add">
                <span class="name">{lane.name}</span>
                <button class="left" on:click={() => pushLane(lane, 'left')}>🡄</button>
                <button class="both" on:click={() => pushLane(lane)}>🡄🡆</button>
                <button class="right" on:click={() => pushLane(lane, 'right')}>🡆</button>
            </div>
        {/each}
    </div>

    <div id="settings">
        <button on:click={() => lanes = []}>Reset</button>
        <label>
            <input type="range" min="50" max="500" bind:value="{length}">
        </label>
    </div>


</main>

<style type="text/sass">
  *, *:before, *:after
    box-sizing: border-box

  main
    display: flex
    flex-direction: column
    align-items: center

  h1
    color: #ff3e00
    text-transform: uppercase
    font-size: 4em
    font-weight: 100

  #road
    display: flex

  #tooltip
    height: 1.5rem

  #buttons
    display: flex
    flex-wrap: wrap
    margin-top: 2rem
    margin-bottom: 2rem
    padding: 0

    .add
      display: grid
      justify-items: stretch
      grid-template-columns: 1fr 2fr 1fr
      grid-template-rows: auto 1fr
      padding: .25rem
      border: 1px solid transparent
      &:hover
        border-color: black

      .name
        grid-column: 1 / 4
        grid-row: 1
        text-align: center

  #settings
    display: flex
    align-items: center
    justify-content: center

  button
    grid-row: 2
    border: 1px solid black
    border-radius: 0
    cursor: pointer
    &:hover
      background-color: rgba(105, 255, 255, .75)
    &.left
      grid-column: 1
      border-right: none
    &.both
      grid-column: 2
    &.right
      grid-column: 3
      border-left: none


</style>
