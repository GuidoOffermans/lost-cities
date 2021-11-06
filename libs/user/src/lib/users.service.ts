import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';

// import { PrismaService } from '../database/prisma.service';
// import { User } from './schema/user.schema';
// import { CreateUserCommand } from './commands/create-user.command';

@Injectable()
export class UsersService {
	// constructor(
	// 	private readonly prismaService: PrismaService,
	// 	private commandBus: CommandBus
	// ) {}
  //
	// async createUser(username, email, password): Promise<User> {
	// 	return this.commandBus.execute(new CreateUserCommand(username, email, password));
	// }
  //
	// async create(createUserDto): Promise<User> {
	// 	return this.prismaService.user.create(createUserDto);
	// }
  //
	// async getAllUsers(): Promise<User[]> {
	// 	return this.prismaService.user.findMany();
	// }
  //
	// public async getUserByEmail(email: string): Promise<User | null> {
	// 	return this.prismaService.user.findUnique({ where: { email } });
	// }
}
