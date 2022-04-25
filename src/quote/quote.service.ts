import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { quote } from '@prisma/client';
import _ from 'lodash';

@Injectable()
export class QuoteService {
  constructor(private readonly prisma: PrismaService) {}

  async getQuotes(pageInt: number, perPageInt: number): Promise<quote[]> {
    const quotes = await this.prisma.quote.findMany({
      skip: perPageInt * (pageInt - 1),
      take: perPageInt,
      orderBy: {
        created_at: 'desc',
      },
    });
    return quotes;
  }

  async getRandomQuote(): Promise<quote> {
    const quotes = await this.prisma.quote.findMany({
      take: 100,
      orderBy: {
        created_at: 'desc',
      },
    });

    const quote = _.sample(quotes);
    return quote;
  }

  async getQuoteById(id: string): Promise<quote> {
    const quote = await this.prisma.quote.findUnique({
      where: {
        id,
      },
    });
    return quote;
  }
}
