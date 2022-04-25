import { Controller, Get, Query, Param } from '@nestjs/common';
import { QuoteService } from './quote.service';

import {
  ApiBearerAuth,
  ApiHeader,
  ApiQuery,
  ApiResponse,
} from '@nestjs/swagger';
import { GetQuotesResponse } from './response/get-quotes.response';
import { GetQuoteByIdResponse } from './response/get-quote-by-id.response';
import { GetRandomQuoteResponse } from './response/get-random-quote.response';

@ApiBearerAuth()
@ApiHeader({
  name: 'Authorization',
  description: 'Jwt Token',
})
@Controller('quote')
export class QuoteController {
  constructor(private readonly quoteService: QuoteService) {}

  @Get()
  @ApiQuery({
    name: 'page',
    description: 'page',
    required: false,
    type: String,
  })
  @ApiQuery({
    name: 'per_page',
    description: 'per_page',
    required: false,
    type: String,
  })
  @ApiResponse({
    status: 200,
    description: 'Successful response',
    type: GetQuotesResponse,
  })
  async getQuotes(
    @Query('page') page: string,
    @Query('per_page') perPage: string,
  ): Promise<any> {
    const pageInt = page ? parseInt(page, 10) : 1;
    const perPageInt = page ? parseInt(perPage, 10) : 20;

    const quotes = await this.quoteService.getQuotes(pageInt, perPageInt);

    const response = {
      message: 'getQuotes',
      data: quotes,
      total: quotes.length,
      page: pageInt,
      limit: perPageInt,
    };
    return response;
  }

  @Get('/random')
  @ApiResponse({
    status: 200,
    description: 'Successful response',
    type: GetRandomQuoteResponse,
  })
  async getRandomQuote(): Promise<any> {
    const quote = await this.quoteService.getRandomQuote();

    const response = {
      message: 'getRandomQuote',
      quote: quote,
    };
    return response;
  }

  @Get('/:id')
  @ApiResponse({
    status: 200,
    description: 'Successful response',
    type: GetQuoteByIdResponse,
  })
  async getQuoteById(@Param('id') id: string): Promise<any> {
    const quote = await this.quoteService.getQuoteById(id);

    const response = {
      message: 'getQuoteById',
      quote: quote,
    };
    return response;
  }
}
