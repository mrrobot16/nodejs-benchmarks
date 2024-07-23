import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  health(): any {
    return {
		status: 200
	}
  }
}
