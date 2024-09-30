import {Body, Delete, Get, Injectable, Param, Post, Put, Query} from '@nestjs/common';
import {Book} from "./entities/book.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";


@Injectable()
export class BookService {
  constructor(
      @InjectRepository(Book)
      private booksRepository: Repository<Book>,
  ) {}

  async create(book: Book): Promise<Book> {
    return this.booksRepository.save(book);
  }

  async findAll(sortBy: string, order: 'ASC' | 'DESC'): Promise<Book[]> {
    return this.booksRepository.find({
      order: {
        [sortBy]: order,
      },
    });
  }

  async findByGenre(genre: string): Promise<Book[]> {
    return this.booksRepository.find({ where: { genre } });
  }

  async findByTitle(title: string): Promise<Book[]> {
    return this.booksRepository.find({ where: { title } });
  }

  async update(id: number, book: Partial<Book>): Promise<Book> {
    await this.booksRepository.update(id, book);
    return this.booksRepository.findOne({
      where: { id: id },
    });
  }

  async remove(id: number): Promise<void> {
    await this.booksRepository.delete(id);
  }
}
