import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
    private readonly songs = []

    create(song) {
    //just mocking the save to the data base
      this.songs.push(song)
      return this.songs
    }
  
    findAll() {
      return this.songs
    }
}
