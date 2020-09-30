export class LaneClass {
    constructor(width, color, background, name) {
        this.width = width ?? 16;
        this.color = color ?? 'gray';
        this.background = background ?? '';
        this.name = name ?? 'Lane'
    }
}
