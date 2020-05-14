//
//  File.swift
//  BaseBallApp
//
//  Created by 임승혁 on 2020/05/11.
//  Copyright © 2020 임승혁. All rights reserved.
//

import Foundation

class GameInfoViewModel {
    let strikeCount: Int
    let ballCount: Int
    let outCount: Int
    var inning: Int
    
    var inningInfo: String?
    
    init(gameInfo: GameTotalInfo) {
        self.strikeCount = gameInfo.sbo.strike
        self.ballCount = gameInfo.sbo.ball
        self.outCount = gameInfo.sbo.out
        self.inning = gameInfo.inning
        
        self.inningInfo = setInningInfo(inning: gameInfo.inning, bottom: gameInfo.bottom)
    }
    
    private func setInningInfo(inning: Int, bottom: Bool) -> String {
        let transBottom: String = bottom ? "초" : "말"
        return "\(inning)회 \(transBottom)"
    }
}
