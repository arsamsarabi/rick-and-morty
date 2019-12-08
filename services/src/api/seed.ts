import { Character } from '../database'
import { normalizeCharacters } from './helpers'
import { getAllCharacters } from './services'

export const seed = async () => {
  const results = await getAllCharacters()
  const characters = normalizeCharacters(results)
  characters.forEach(character => {
    const newCharacter = new Character(character)
    newCharacter.save()
    console.log(`${character.name} saved`)
  })
}
