import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { EditUserDto } from './dto/edit-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async editUser(userId: string, dto: EditUserDto) {
    const user = await this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        ...dto,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        displayName: true,
        realName: true,
        phone: true,
        email: true,
        biography: true,
        livesIn: true,
        speakLanguage: true,
        avatarImgUrl: true,
        verified: true,
        coverImgUrl: true,
        website: true,
        socialMedia: true,
        paymentMethods: true,
        notifications: true,
      },
    });

    return user;
  }
}
