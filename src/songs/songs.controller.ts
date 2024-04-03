import { Body, Controller, Delete, Get, Inject, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song-dto';

@Controller('songs')
export class SongsController {
    constructor(private songService: SongsService) {}
    
    @Post()
    create(@Body() createSongDTO: CreateSongDTO) {
       return this.songService.create(createSongDTO)
    }
    
    @Get()
    findAll() {
        return this.songService.findAll()
    }

    @Get(':id')
    findOne() {
        return 'fetch song by id endpoint'
    }

    @Put(':id')
    update() {
        return 'updated song by id endpoint'
    }

    @Delete (':id')
    delete() {
        return 'delete song by id endpoint'
    }
}
