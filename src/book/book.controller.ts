import {Controller, Get, Post, Body, Patch, Param, Delete, Put, Query} from '@nestjs/common';
import {Book} from "./entities/book.entity";
import {BookService} from "./book.service";
import {UpdateBookDto} from "./dto/update-book.dto";

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  create(@Body() book: Book) {
    return this.bookService.create(book);
  }

  @Get()
  findAll(@Query('sortBy') sortBy: string = 'title', @Query('order') order: 'ASC' | 'DESC' = 'ASC') {
    return this.bookService.findAll(sortBy, order);
  }

  @Get('genre')
  findByGenre(@Query('genre') genre: string) {
    return this.bookService.findByGenre(genre);
  }

  @Get('title')
  findByTitle(@Query('title') title: string) {
    return this.bookService.findByTitle(title);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateBookDto: UpdateBookDto) {
    return this.bookService.update(+id, updateBookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.bookService.remove(id);
  }
}
