import { Body, Controller, Delete, Get, HttpException, HttpStatus, Inject, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
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
        try {
           return this.songService.findAll()
        }
        catch(e) {
            throw new HttpException('server error', HttpStatus.INTERNAL_SERVER_ERROR, {
                cause: e,
            })
        }
    }

    @Get(':id')
    findOne(
        @Param('id', new ParseIntPipe({errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE}))
        id:number
    ) {
        return `fetch song by id endpoint ${typeof id}`
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
