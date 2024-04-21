 
import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class AppService {
  async writeFile(filename: string, data: any): Promise<void> {
    return new Promise((resolve, reject) => {
      fs.writeFile(filename, JSON.stringify(data), err => {
        if (err) {
          return reject(err);
        }
        resolve();
      });
    });
  }

  async readFile(filename: string): Promise<string> {
    return new Promise((resolve, reject) => {
      fs.readFile(filename, 'utf-8', (err, data) => {
        if (err) {
          return reject(err);
        }
        resolve(data);
      });
    });
  }
}
 /*

import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
@Injectable()
export class AppService {
  async readFile(filePath: string): Promise<string> {
    return new Promise((resolve, reject) => {
      fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
          reject(err);
        }
        console.log('file Read ....');
        resolve(data);
      });
    });
  }
  async writeFile(filePath: string, data: string): Promise<void> {
    return new Promise((resolve, reject) => {
      fs.writeFile(filePath, data, 'utf-8', (err) => {
        if (err) {
          reject(err);
        }
        resolve();
      });
    });
  }
  async appendFile(filePath: string, data: string): Promise<void> {
    return new Promise((resolve, reject) => {
      fs.appendFile(filePath, data, 'utf-8', (err) => {
        if (err) {
          reject(err);
        }
        resolve();
      });
    });
  }
  async deleteFile(filePath: string): Promise<void> {
    return new Promise((resolve, reject) => {
      fs.unlink(filePath, (err) => {
        if (err) {
          reject(err);
        }
        resolve();
      });
    });
  }
  async renameFile(oldPath: string, newPath: string): Promise<void> {
    return new Promise((resolve, reject) => {
      fs.rename(oldPath, newPath, (err) => {
        if (err) {
          reject(err);
        }
        resolve();
      });
    });
  }
}*/