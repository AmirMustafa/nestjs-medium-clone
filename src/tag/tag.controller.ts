import { Controller, Get } from '@nestjs/common';
import { Tag } from './tag.entity';
import { TagService } from './tag.service';

@Controller('tags')
export class TagController {
  constructor(private readonly tagService: TagService) {}
  @Get()
  async findAll(): Promise<Tag[]> {
    return await this.tagService.findAll();
  }
}
