export default function Player(name) {
    this.name = name,
    this.roundVictories = 0,
    this.addVictory = () => {
        this.roundVictories++;
    }
}