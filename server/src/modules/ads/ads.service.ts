interface Ad {
    id: number;
    title: string;
    description: string;
    price: number;
    userId: number;
    createdAt: Date;
}

class AdsService {
    private ads: Ad[] = [];

    create(ad: Omit<Ad, 'id' | 'createdAt'>): Ad {
        const newAd: Ad = {...ad, id: this.ads.length + 1, createdAt: new Date()};
        this.ads.push(newAd);
        return newAd;
    }

    findAll(): Ad[] {
        return this.ads;
    }

    findOne(id: number): Ad | undefined {
        return this.ads.find(ad => ad.id === id);
    }

    update(id: number, updatedAd: Partial<Omit<Ad, 'id' | 'createdAt'>>): Ad | undefined {
        const adIndex = this.ads.findIndex(ad => ad.id === id);
        if (adIndex !== -1) {
            this.ads[adIndex] = {...this.ads[adIndex], ...updatedAd};
            return this.ads[adIndex];
        }
        return undefined;
    }

    delete(id: number): boolean {
        const adIndex = this.ads.findIndex(ad => ad.id === id);
        if (adIndex !== -1) {
            this.ads.splice(adIndex, 1);
            return true;
        }
        return false;
    }
}